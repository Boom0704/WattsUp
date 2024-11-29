package com.future.my.company.dao;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.future.my.company.vo.CompanyVO;

@Mapper
public interface ICompanyDAO {

	public CompanyVO selectCompanyById(String mainId);
	public List<CompanyVO> selectAllCompanies();
	@Select("SELECT sub_addr FROM daejeon_sub WHERE corp_name = #{corpName}")
	public String selectCompanyAddr(@Param("corpName") String corpName);
}
