package com.future.my.member.web;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.future.my.member.service.MemberService;
import com.future.my.member.vo.MemberVO;

/**
 * Class Name  : TipController
 * Author      : boom
 * Created Date: 2024. 11. 19.
 * Version: 1.0
 * Purpose:   
 * Description: 
 */
@Controller
public class LoginController {
	
	@Autowired
	MemberService service;
	//팁뷰로 이동
	@RequestMapping("/login")
	public String logView() {
		return "log/loginView";
	}
	
	@RequestMapping("/loginDo")
    public String loginDo(@RequestParam("memId") String memId,
                          @RequestParam("memPw") String memPw,
                          HttpSession session, Model model) {
        MemberVO member = service.loginMember(memId, memPw);
        
        if (member != null) {
        	//// 로그인 성공 시 세션에 사용자 정보 저장
        	session.setAttribute("loginUser", member);
        	System.out.println(member);
        	// 로그인 성공 시 홈 페이지로 이동
            return "redirect:/";
        } 
       
        
        else {
            // 로그인 실패 시 에러 메시지와 함께 로그인 페이지로 이동
            model.addAttribute("error", "아이디 또는 비밀번호가 일치하지 않습니다.");
            return "log/loginView";
        }
    }
	
    @RequestMapping("/logoutDo")
    public String logout(HttpSession session) {
        session.invalidate();
        return "redirect:/"; // 로그아웃 후 로그인 페이지로 이동
    }
}
