package com.future.my.board.dao;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Mapper;

import com.future.my.board.vo.BoardVO;
import com.future.my.board.vo.ReplyVO;
import com.future.my.board.vo.BoardSearchVO;
import com.future.my.member.vo.MemberVO;

@Mapper
public interface IBoardDAO {
	
	// 게시글 전체 건수
	public int getTotalRowCount(BoardSearchVO searchVO);
   
	// 게시글 목록 조회
    public ArrayList<BoardVO> getBoardSearch(BoardSearchVO searchVO); 
    
    // 게시글 상세 조회
    public BoardVO getBoard(int boardNo);
    
    // 게시글 작성 
    public int writeBoard(BoardVO vo);
    
    // 게시글 수정
    public int updateBoard(BoardVO board);
    
    // 게시글 삭제
    public int deleteBoard(int boardNo); // 게시물 삭제 메서드 추가
    
    // 댓글 리스트 
    public ArrayList<ReplyVO> getReplyList(int boardNo);
    
    // 댓글 조회
    public ReplyVO getReply (String replyNo);
    
    // 댓글 작성
    public int writeReply(ReplyVO vo);
    
    // 댓글 삭제 
    public int delReply(String replyNo);
    
    // 게시글 업로드 
    public int boardUpload(BoardVO vo);
    
    // 게시글 업로드 (회원 정보)
    public int boardUpload(MemberVO vo);

    // 조회수 증가
    public void updateViewCount(int boardNo);
}

