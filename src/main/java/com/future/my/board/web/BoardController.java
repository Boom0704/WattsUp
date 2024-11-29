package com.future.my.board.web;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.future.my.board.service.BoardService;
import com.future.my.board.vo.BoardSearchVO;
import com.future.my.board.vo.BoardVO;
import com.future.my.board.vo.ReplyVO;

import com.future.my.member.vo.MemberVO;

@Controller
public class BoardController {

	@Autowired
	BoardService boardService;

	@Value("#{util['file.upload.path']}")
	private String CURR_IMAGE_PATH;

	@Value("#{util['file.download.path']}")
	private String WEB_PATH;

	@RequestMapping("/download")
	public void download(String imageFileName, HttpServletResponse response) throws IOException {
		OutputStream out = response.getOutputStream();
		String downloadFile = CURR_IMAGE_PATH + File.separator + imageFileName;
		File file = new File(downloadFile);
		if (!file.exists()) {
			response.sendError(HttpServletResponse.SC_NOT_FOUND, "file not found");
		}
		 // CORS 헤더 추가
        
		// 로컬에서 요청 파일을 찾아서 전달
		response.setHeader("Cache-Control", "no-cache");
		response.setHeader("Access-Control-Allow-Origin", "*");
		response.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
		response.setHeader("Access-Control-Allow-Headers", "Content-Type");
		response.setHeader("Content-Disposition", "attachment; fileName=" + imageFileName);
		response.setContentType("application/octet-stream");
		try (FileInputStream in = new FileInputStream(file)) {
			byte[] buffer = new byte[1024 * 8];
			while (true) {
				int count = in.read(buffer);
				if (count == -1) {
					break;
				}
				out.write(buffer, 0, count); // 실시간 전송
			}
		} catch (IOException e) {
		} finally {
			out.close();
		}
	}

	@RequestMapping("/multiImgUpload")
	public void multiImgUpload(HttpServletRequest req, HttpServletResponse res) {
	    // 저장 후 이미지 저장 정보 전달
	    try {
	        String sFileInfo = "";
	        String fileName = req.getHeader("file-name"); // 클라이언트에서 보낸 파일 이름

	        // 확장자 추출 (소문자로 변환)
	        String prifix = fileName.substring(fileName.lastIndexOf(".") + 1).toLowerCase();

	        // 파일 저장 경로 설정
	        String path = CURR_IMAGE_PATH;
	        File file = new File(path);
	        if (!file.exists()) {
	            file.mkdir();  // 디렉터리 없으면 생성
	        }

	        // 서버에 저장될 파일 이름 (UUID를 사용하여 고유한 파일명 생성)
	        String realName = UUID.randomUUID().toString() + "." + prifix;
	        File saveFile = new File(path + File.separator + realName); // 경로와 파일 이름 결합

	        // 파일 입력 스트림과 출력 스트림 처리
	        try (InputStream is = req.getInputStream();
	             OutputStream os = new FileOutputStream(saveFile)) {

	            byte[] buffer = new byte[1024 * 8]; // 버퍼 크기 설정
	            int read;
	            while ((read = is.read(buffer)) != -1) {
	                os.write(buffer, 0, read); // 버퍼에서 읽어서 파일로 출력
	            }

	            // 업로드 후 파일 URL 생성
	            sFileInfo += "&bNewLine=true";
	            sFileInfo += "&sFileName=" + fileName;
	            sFileInfo += "&sFileURL=" + WEB_PATH + realName; // 웹에서 접근 가능한 경로

	            // 응답 클라이언트로 반환
	            res.setContentType("text/html;charset=UTF-8");
	            try (PrintWriter print = res.getWriter()) {
	                print.print(sFileInfo); // 성공적인 업로드 정보 전달
	                print.flush();
	            }
	        }
	    } catch (IOException e) {
	        e.printStackTrace();
	        // 오류 처리: 파일 업로드 실패 시 클라이언트에 오류 메시지 전달
	        try (PrintWriter print = res.getWriter()) {
	            print.print("error"); // 업로드 실패
	            print.flush();
	        } catch (IOException ioException) {
	            ioException.printStackTrace();
	        }
	    }
	}

	@RequestMapping("/boardView")
	public String boardView(Model model
	    //searchVO 	
	  , @ModelAttribute("searchVO") BoardSearchVO searchVO) {
		try {
			ArrayList<BoardVO> boardList = boardService.getBoardSearch(searchVO); // input searchVO
			// Model은 spring에서 컨트롤러와 뷰 사이의 데이터를 전달하기 위한 인터페이스
			// Model객체에 추가하면 뷰에서 데이터를 사용할 수 있음.
			model.addAttribute("boardList", boardList);
//	        model.addAttribute("searchVO", searchVO); // 검색 조건을 다시 모델에 추가
//	        model.addAttribute("totalRowCount", searchVO.getTotalRowCount()); // 전체 게시글 수
//	        model.addAttribute("totalPageCount", searchVO.getTotalPageCount());
			
			System.out.println(boardList);
	
			return "board/boardView";
		}catch(Exception e) {
	        // 예외 처리: 오류 발생 시 에러 메시지 전달
	        e.printStackTrace();
	        model.addAttribute("error", "게시글 목록을 가져오는 데 오류가 발생했습니다.");
	        return "error"; // 에러 페이지로 리턴	
		}
	}

	@RequestMapping("/boardDetailView")
	public String boardDetailView(Model model, int boardNo) throws Exception {	
		BoardVO vo = boardService.getBoard(boardNo);
		ArrayList<ReplyVO> replyList = boardService.getReplyList(boardNo);

		model.addAttribute("board", vo);
		model.addAttribute("replyList", replyList); // 댓글 리스트

		return "board/boardDetailView";
	}
	
	@GetMapping("/board/detail")
    public String boardDetail(@RequestParam int boardNo, Model model) {
        try {
            // 게시글 상세 조회 및 조회수 증가
            BoardVO board = boardService.getBoard(boardNo);
            model.addAttribute("board", board);  // 게시글 정보를 모델에 추가
        } catch (Exception e) {
            model.addAttribute("error", e.getMessage());  // 에러 메시지를 모델에 추가
        }
        return "board/boardDetail";  // 게시글 상세 페이지로 리턴
    }

	@RequestMapping("/boardWriteView")
	public String boardWriteView(HttpSession session) {
		if (session.getAttribute("loginUser") == null) {
			return "redirect:/login"; // 로그인 정보가 없으면 로그인 페이지로 리디렉션
		}
		return "board/boardWriteView"; // 로그인 되어 있으면 게시글 작성 페이지로 이동
	}

	@PostMapping("/boardWriteDo")
	public String boardWriteDo(BoardVO board) throws Exception {
		// 이미지를 업로드할 경우에만 업로드 처리
		if (board.getFileImage() != null && !board.getFileImage().isEmpty()) {
			String dbPath = boardService.boardImage(board, CURR_IMAGE_PATH, WEB_PATH);
			System.out.println(dbPath);
			board.setBoardImage(dbPath);
		} else {
			board.setBoardImage(""); // 이미지가 없다면 그냥 게시글을 작성만 하고, 이미지 필드는 비워둡니다.
		}
		// 게시글 작성
		boardService.writeBoard(board);
		return "redirect:/boardView";
	}

	@GetMapping("/boardEditView")
	public String boardEditView(Model model, int boardNo, HttpSession session) throws Exception {
	    // 세션에서 로그인한 사용자 정보를 가져옵니다.
	    MemberVO loginUser = (MemberVO) session.getAttribute("loginUser");

	    // 로그인한 사용자가 없으면 로그인 페이지로 리디렉션
	    if (loginUser == null) {
	        return "redirect:/login";  // 로그인 페이지로 이동
	    }

	    // 게시글 정보를 가져옵니다.
	    BoardVO board = boardService.getBoard(boardNo);

	    // 로그인한 사용자와 게시글 작성자가 동일한지 확인합니다.
	    if (!loginUser.getMemId().equals(board.getMemId())) {
	        // 작성자가 아니라면 게시글 보기 페이지로 리디렉션
	        return "redirect:/boardDetailView?boardNo=" + boardNo;
	    }

	    // 게시글 정보 모델에 추가하여 수정 페이지로 전달합니다.
	    model.addAttribute("board", board);
	    return "board/boardEditView"; // 수정 페이지로 이동
	}
	


	// 게시글 수정 처리
	@PostMapping("/boardEditDo")
	public String boardEditDo(BoardVO board )throws Exception {
	    // 기존 이미지를 그대로 유지하고, 새로운 이미지가 있으면 처리
	    if (board.getFileImage() != null && !board.getFileImage().isEmpty()) {
	        String uploadedImagePath = boardService.boardImageUpdate(board, CURR_IMAGE_PATH, WEB_PATH);
	        board.setBoardImage(uploadedImagePath); // 새로운 이미지 경로 업데이트
	    }
	    // 게시글 수정 처리
	    boardService.updateBoard(board);
	    // 수정 후 해당 게시글 보기 페이지로 리디렉션
	    return "redirect:/boardDetailView?boardNo=" + board.getBoardNo();
	}



	@RequestMapping("/boardDelete")
	public String boardDelete(int boardNo, HttpSession session) {
		try {
			// 세션에서 로그인한 사용자 정보를 MemberVO 객체로 가져옵니다.
			MemberVO loginUser = (MemberVO) session.getAttribute("loginUser");

			// 로그인한 사용자가 없으면 로그인 페이지로 리디렉션
			if (loginUser == null) {
				return "redirect:/login";
			}

			// 게시글 정보를 가져옵니다.
			BoardVO board = boardService.getBoard(boardNo);

			// 로그인한 사용자와 게시글 작성자가 동일한지 확인합니다.
			if (!loginUser.getMemId().equals(board.getMemId())) {
				// 작성자가 아니라면 게시글 보기 페이지로 리디렉션
				return "redirect:/boardDetailView?boardNo=" + boardNo;
			}

			// 게시글 삭제
			boardService.deleteBoard(boardNo);
		} catch (Exception e) {
			e.printStackTrace();
			return "redirect:/boardView"; // 예외가 발생하면 게시글 목록 페이지로 리디렉션
		}

		return "redirect:/boardView"; // 삭제 후 게시글 목록 페이지로 리디렉션
	}

	@ResponseBody
	@PostMapping("/writeReplyDo")
	public ReplyVO writeReplyDo(@RequestBody ReplyVO vo) throws Exception {
		Date date = new Date();
		SimpleDateFormat fdr = new SimpleDateFormat("yyMMddHHmmssSSS");
		String uniquId = fdr.format(date);
		vo.setReplyNo(uniquId);
		// 댓글 저장
		boardService.writeReply(vo);
		// 저장된 댓글 조회
		ReplyVO result = boardService.getReply(uniquId);
		return result;
	}

	@ResponseBody
	@PostMapping("/delReplyDo")
	public String delReplyDo(@RequestBody ReplyVO vo) {
		String result = "success";
		try {
			boardService.delReply(vo.getReplyNo());
		} catch (Exception e) {
			e.printStackTrace();
			result = "fail";
		}
		return result;
	}

	@ExceptionHandler(Exception.class)
	public String errorView(Exception e, Model model) {
		model.addAttribute("errorMessage", e.getMessage());
		e.printStackTrace();
		return "errorView"; // 오류 페이지에서 오류 메시지를 표시할 수 있도록
	}

}