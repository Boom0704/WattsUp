package com.future.my.board.service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.future.my.board.dao.IBoardDAO;
import com.future.my.board.vo.BoardVO;
import com.future.my.board.vo.ReplyVO;
import com.future.my.board.vo.BoardSearchVO;

@Service
public class BoardService {
    
	@Autowired
    IBoardDAO dao;

    public ArrayList<BoardVO> getBoardSearch(BoardSearchVO searchVO) {
		// 전체 건수 조회
		int totalRowCount = dao.getTotalRowCount(searchVO);
		System.out.println(totalRowCount);
		searchVO.setTotalRowCount(totalRowCount);
				 
		// 검색 조건으로 검색된 전체 건수를 기준으로 세팅!
		searchVO.pageSetting();   	
        return dao.getBoardSearch(searchVO);
    }

    public BoardVO getBoard(int boardNo) throws Exception {
        BoardVO result = dao.getBoard(boardNo);
        if (result == null) {
            throw new Exception("게시글을 찾을 수 없습니다.");
        }
        dao.updateViewCount(boardNo);
        return result;
    }

    public void writeBoard(BoardVO vo) throws Exception {
        // 파일 업로드 후 경로를 boardImage 필드에 저장
//        String imagePath = boardImage(vo, "upload/directory/path", "/web/path/to/board/images/");
//        vo.setBoardImage(imagePath); // 저장된 이미지 경로를 BoardVO에 설정
        int result = dao.writeBoard(vo);
        if (result == 0) {
            throw new Exception("게시글 작성에 실패했습니다.");
        }
    }

    // 게시글 수정
    public void updateBoard(BoardVO vo) throws Exception {
        // 이미지가 새로 업로드된 경우만 처리
//        String imagePath = boardImageUpdate(vo, "upload/directory/path", "/web/path/to/board/images/");
//        vo.setBoardImage(imagePath); // 새로 저장된 이미지 경로를 설정
        int result = dao.updateBoard(vo);
        if (result == 0) {
            throw new Exception("게시글 수정에 실패했습니다.");
        }
    }

    public void deleteBoard(int boardNo) throws Exception {
        int result = dao.deleteBoard(boardNo); // DAO에서 삭제 메서드 호출
        if (result == 0) {
            throw new Exception("게시글 삭제에 실패했습니다.");
        }
    }
//댓글 리스트
    public ArrayList<ReplyVO> getReplyList(int boardNo) {
        return dao.getReplyList(boardNo);
    }
//댓글 조회
    public ReplyVO getReply(String replyNo) {
        return dao.getReply(replyNo);
    }
//댓글 작성
    public int writeReply(ReplyVO vo) throws Exception {
        int result = dao.writeReply(vo);
        if (result == 0) {
            throw new Exception("댓글 작성에 실패했습니다.");
        }
        return result;
    }
//댓글 삭제
    public void delReply(String replyNo) throws Exception {
        int result = dao.delReply(replyNo);
        if (result == 0) {
            throw new Exception("댓글 삭제에 실패했습니다.");
        }
        
    }

    // 이미지 업로드 처리 (게시글 작성시)
    public String boardImage(BoardVO vo, String uploadDir, String webPath) throws Exception {
        MultipartFile file = vo.getFileImage(); // MultipartFile 가져오기

        if (file == null || file.isEmpty()) {
            return ""; // 이미지가 없으면 빈 문자열 반환
        }

        // 파일명 생성 (UUID를 이용해 중복되지 않는 파일명 생성)
        String origin = file.getOriginalFilename();
        String unique = UUID.randomUUID().toString() + "_" + origin;
        String dbPath = webPath + unique; // DB에 저장할 경로
        Path filePath = Paths.get(uploadDir, unique); // 실제 저장할 경로

        // 파일 물리적으로 저장
        try {
            Files.copy(file.getInputStream(), filePath);
        } catch (IOException e) {
            throw new Exception("파일 저장 중 오류가 발생했습니다.", e);
        }

        return dbPath; // 저장된 파일 경로 반환
    }


    // 이미지 업로드 처리 (게시글 수정시)
    public String boardImageUpdate(BoardVO vo, String uploadDir, String webPath) throws Exception {
        MultipartFile file = vo.getFileImage(); // 업로드된 새 파일 가져오기

        // 새 이미지가 제공되었을 때만 업로드 처리
        if (file != null && !file.isEmpty()) {
            // 기존 이미지가 있다면 삭제 (파일 경로에서 기존 이미지를 찾아 삭제)
            if (vo.getBoardImage() != null && !vo.getBoardImage().isEmpty()) {
                String oldImagePath = vo.getBoardImage().replace(webPath, uploadDir);
                File oldImageFile = new File(oldImagePath);
                if (oldImageFile.exists()) {
                    oldImageFile.delete(); // 기존 이미지 삭제
                }
            }

            // 새로운 파일명 생성
            String origin = file.getOriginalFilename();
            String unique = UUID.randomUUID().toString() + "_" + origin;
            String dbPath = webPath + unique; // DB에 저장할 경로
            Path filePath = Paths.get(uploadDir, unique); // 실제 저장 경로

            // 새 이미지 파일을 서버에 저장
            try {
                Files.copy(file.getInputStream(), filePath);
            } catch (IOException e) {
                throw new Exception("파일 저장 중 오류가 발생했습니다.", e); // 파일 저장 오류 처리
            }

            return dbPath; // 새로 저장된 이미지 경로 반환
        }

        // 새 이미지가 없으면 기존 이미지를 그대로 사용
        return vo.getBoardImage(); // 기존 이미지 경로 그대로 사용
    }
}
