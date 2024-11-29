package com.future.my.board.vo;

import org.springframework.web.multipart.MultipartFile;

import lombok.Data;

@Data
public class BoardVO {
    
    private int boardNo;               /* 게시글 번호    */
    private String boardTitle;         /* 게시글 제목    */
    private String boardContent;       /* 게시글 내용    */
    private String memId;              /* 작성자 아이디  */
    private MultipartFile fileImage;  /* 게시판 사진 (MultipartFile로 변경) */
    private String boardImage;
    private String updateDt;		/* 수정 일자       */
    private String createDt;		/* 생성 일자       */
    private int viewCount;		/* 조회수       */
    private String memCorp;		/* 작성자 회사 */
    private int rnum;
    
}
