package com.future.my.member.vo;

import javax.validation.constraints.Pattern;

import lombok.Data;

@Data
public class MemberVO {
	@Pattern(regexp = "^\\w{4,15}$", message = "아이디는 영문숫자 4 ~ 15 자")
	private String memId;
	@Pattern(regexp = "^\\w{4,10}$", message = "패스워드는 영문숫자 4 ~ 10 자 ")
	private String memPw;
	private String memCorp;
	private String subAddr;
	private String useYn;
	private String regDt;
}
