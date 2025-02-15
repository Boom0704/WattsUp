package com.future.my.company.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.future.my.company.dao.ICompanyDAO;
import com.future.my.company.vo.CompanyVO;

@Service
public class CompanyService {
    @Autowired
    private ICompanyDAO companyDAO;

    // 전체 회사 정보 조회
    public List<CompanyVO> getAllCompanies() {
        return companyDAO.selectAllCompanies();
    }

    // 특정 회사 정보 조회
    public CompanyVO getCompanyById(String mainId) {
        return companyDAO.selectCompanyById(mainId);
    }
    // 회사 주소정보 조회
    public String getCompanyAddrByCorpName(String corpName) {
        return companyDAO.selectCompanyAddr(corpName);
    }
}
