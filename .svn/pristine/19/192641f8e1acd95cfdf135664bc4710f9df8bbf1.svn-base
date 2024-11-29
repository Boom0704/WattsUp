package com.future.my.company.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.future.my.company.service.CompanyService;
import com.future.my.company.vo.CompanyVO;

/**
 * Class Name  : CompanyConyroller
 * Author      : boom
 * Created Date: 2024. 11. 19.
 * Version: 1.0
 * Purpose:   
 * Description: 
 */
@Controller
public class CompanyConyroller {

    @Autowired
    private CompanyService companyService;


	//회사 뷰
	@RequestMapping("/companyView")
	public String companyView() {
		return "chart/companyView";
	}
	
    // 전체 회사 정보 조회
    @GetMapping("/companies")
    public List<CompanyVO> getAllCompanies() {
        return companyService.getAllCompanies();
    }

    // 특정 회사 정보 조회
    @GetMapping("/company")
    public CompanyVO getCompanyById(@RequestParam("mainId") String mainId) {
        return companyService.getCompanyById(mainId);
    }
}
