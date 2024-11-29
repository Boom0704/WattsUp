package com.future.my.chart.web;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.future.my.chart.service.ChartService;
import com.future.my.chart.vo.ChartVO;

import com.future.my.company.service.CompanyService;
import com.future.my.company.vo.CompanyVO;



/**
 * Class Name  : ChartController
 * Author      : boom
 * Created Date: 2024. 11. 19.
 * Version: 1.0
 * Purpose:   
 * Description: 
 */
@Controller
public class ChartController {
	
	@Autowired
	ChartService chartService;
	
	@Autowired
    CompanyService companyService;
	
	//차트 뷰로 이동
	@RequestMapping("/chartView")
	public String chartView(Model model)  {
		List<CompanyVO> companyList = companyService.getAllCompanies();
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            String companyListJson = objectMapper.writeValueAsString(companyList);
            model.addAttribute("companyList", companyListJson);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            model.addAttribute("companyList", "[]");
        }
		return "chart/chartView";
	}
	
	@RequestMapping("/getMonth")
	@ResponseBody
	public Map<String, List<Float>> monthChartView(@RequestBody Map<String, String> datas) throws Exception {
		String year = datas.get("year");
		String corp = datas.get("corp");
		ChartVO searchVO = new ChartVO();
		searchVO.setCorpName(corp);
		searchVO.setUseYear(year);
		List<ChartVO> monthList = chartService.selectMonthChart(searchVO);
		List<Float> elecList = new ArrayList<>();
		List<Float> gasList = new ArrayList<>();		
		List<Float> totalList = new ArrayList<>();	
		for (int i = 0; i < monthList.size(); i++) {
			elecList.add((float)(monthList.get(i).getElecUse()));
			gasList.add((float)(monthList.get(i).getGasUse()));
			totalList.add((float)(monthList.get(i).getTotalUse()));
		}
		Map<String, List<Float>> resultMap = new HashMap<>();
		resultMap.put("elecList", elecList);
		resultMap.put("gasList", gasList);
		resultMap.put("totalList", totalList);
		float elecToe = 0;
		float gasToe = 0;
		List<Float> elecToeList = new ArrayList<>();
		List<Float> gasToeList = new ArrayList<>();
		for (int i = 0; i < monthList.size(); i ++) {
			elecToe += Float.parseFloat(monthList.get(i).getElecToe());
			gasToe += Float.parseFloat(monthList.get(i).getGasToe());
		}
		elecToeList.add(elecToe);
		gasToeList.add(gasToe);
		resultMap.put("elecToeList", elecToeList);
		resultMap.put("gasToeList", gasToeList);

		return resultMap;
	}
	
	@RequestMapping("/getCorpData")
	@ResponseBody
	public List<ChartVO> getCorpData(Model model,@RequestParam("corp") String corp) throws Exception{
		List<ChartVO> chartList = chartService.selectAllChart(corp);
		model.addAttribute("chartList",chartList);
		return chartList;
	}
}
