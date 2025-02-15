package com.future.my.member.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.future.my.member.vo.MemberVO;

@Mapper
public interface IMemberDAO {
	//member에서는 로그인, 회원가입, 마이페이지 기능을 담당합니다.
	
	//회원가입
	public int registMember(MemberVO vo);
	//회원가입 아이디 중복 체크
	public int registCheckId(@Param("memId") String memId);
	//로그인
	public MemberVO loginMember(MemberVO vo);
	//마이페이지..
	public int memberUpdate(MemberVO vo);

}
