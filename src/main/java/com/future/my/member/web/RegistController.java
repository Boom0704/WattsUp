package com.future.my.member.web;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.future.my.company.service.CompanyService;
import com.future.my.company.vo.CompanyVO;
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
public class RegistController {
	
	@Autowired
	MemberService service;
	
    @Autowired
    CompanyService companyService;
    
    @RequestMapping("/regist")
    public String logView(Model model) {
        List<CompanyVO> companyList = companyService.getAllCompanies();
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            String companyListJson = objectMapper.writeValueAsString(companyList);
            model.addAttribute("companyList", companyListJson);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            model.addAttribute("companyList", "[]");
        }
        return "log/registView";
    }
	
	@RequestMapping("/registDo")
	public String registDo(@Valid MemberVO vo, BindingResult result, Model model) {
        List<CompanyVO> companyList = companyService.getAllCompanies();
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            String companyListJson = objectMapper.writeValueAsString(companyList);
            model.addAttribute("companyList", companyListJson);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            model.addAttribute("companyList", "[]");
        }
        
        if(result.hasErrors()) {
			model.addAttribute("error","아이디/비밀번호가 형식에 맞지않습니다.");
			System.out.println("검증 오류 발생");
			return "log/registView";
		}
		
		if(service.registCheckId(vo.getMemId())) {
			model.addAttribute("error", "중복아이디 입니다");
			System.out.println("중복아이디");
			return "log/registView";
		}

        try {
            service.registMember(vo);
        } catch (Exception e) {
            model.addAttribute("error", "빈칸을 채워주세요!");
            System.out.println("오류발생");
            return "log/registView";
        }
        
        return "log/loginView"; // 성공 시 로그인 페이지로 이동
       }
	}

