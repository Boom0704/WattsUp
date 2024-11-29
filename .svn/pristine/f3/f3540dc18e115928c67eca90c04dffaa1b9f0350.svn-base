package com.future.my.member.web;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.future.my.chart.service.ChartService;
import com.future.my.chart.vo.ChartVO;
import com.future.my.company.service.CompanyService;
import com.future.my.company.vo.CompanyVO;
import com.future.my.member.service.MemberService;
import com.future.my.member.vo.MemberVO;

@Controller
public class MypageController {
   
   @Autowired
   MemberService memberService;
   //팁뷰로 이동
   @Autowired
    CompanyService companyService;
   
   @Autowired
	ChartService chartService;
      
   @RequestMapping("/mypage")
   public String mypages(HttpSession session, Model model) {
	   
      return "mypage/myPage";
   }
   @RequestMapping("/mypage/getMonth")
   @ResponseBody
   public Map<String, List<Integer>> getMyMonthData(@RequestBody Map<String, String> datas, HttpSession session) throws Exception {
       // 세션에서 사용자 정보 가져오기
       MemberVO loginUser = (MemberVO) session.getAttribute("loginUser");
       if (loginUser == null || loginUser.getMemCorp() == null) {
           throw new IllegalArgumentException("로그인된 사용자 정보가 없습니다.");
       }

       // 회사 정보와 연도 설정
       String corp = loginUser.getMemCorp(); // 세션의 회사 정보
       String year = datas.getOrDefault("year", "2022"); // 연도는 기본값 2022

       // 데이터 검색
       ChartVO searchVO = new ChartVO();
       searchVO.setCorpName(corp);
       searchVO.setUseYear(year);

       List<ChartVO> monthList = chartService.selectMonthChart(searchVO);

       // 응답 데이터 준비
       List<Integer> elecList = new ArrayList<>();
       List<Integer> gasList = new ArrayList<>();
       for (ChartVO chart : monthList) {
           elecList.add(chart.getElecUse());
           gasList.add(chart.getGasUse());
       }

       Map<String, List<Integer>> resultMap = new HashMap<>();
       resultMap.put("elecList", elecList);
       resultMap.put("gasList", gasList);

       return resultMap;
   }
   
   
   @RequestMapping("/updateDo")
   public String updateDo(MemberVO update, HttpSession session,Model model) throws Exception {
      
       List<CompanyVO> companyList = companyService.getAllCompanies();
           ObjectMapper objectMapper = new ObjectMapper();
           try {
               String companyListJson = objectMapper.writeValueAsString(companyList);
               model.addAttribute("companyList", companyListJson);
               
               
           } catch (JsonProcessingException e) {
               e.printStackTrace();
               model.addAttribute("companyList", "[]");
           }
      
      
      memberService.memberUpdate(update);
      MemberVO vo = (MemberVO) session.getAttribute("loginUser");
      vo.setMemCorp(update.getMemCorp());
      String updatedSubAddr = companyService.getCompanyAddrByCorpName(update.getMemCorp());
   // 조회된 주소를 세션에 업데이트
      vo.setSubAddr(updatedSubAddr);
      session.setAttribute("loginUser", vo);
 
      
      return "mypage/myPage";
   }
   @RequestMapping("/mypageedit")
   public String mypage(HttpSession session, Model model) {
        List<CompanyVO> companyList = companyService.getAllCompanies();
           ObjectMapper objectMapper = new ObjectMapper();
           try {
               String companyListJson = objectMapper.writeValueAsString(companyList);
               model.addAttribute("companyList", companyListJson);
           } catch (JsonProcessingException e) {
               e.printStackTrace();
               model.addAttribute("companyList", "[]");
           }
      return "mypage/mypageEdit";
   }

   

      
      
      
}




