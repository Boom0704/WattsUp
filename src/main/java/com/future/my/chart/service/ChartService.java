package com.future.my.chart.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.future.my.chart.dao.IChartDAO;
import com.future.my.chart.vo.ChartVO;

@Service
public class ChartService {

    @Autowired
    IChartDAO dao;

    //전체 데이터 조회
    public List<ChartVO> selectAllChart(String corp) throws Exception {
    	List<ChartVO> result = dao.getChartList(corp);
    	if (result.size() == 0) {
            throw new Exception();
        }
        return result;
    }

    public List<ChartVO> selectMonthChart(ChartVO searchVO) throws Exception {
    	List<ChartVO> result = dao.getMonthChart(searchVO);
    	if (result == null) {
    		throw new Exception();
    	}
    	return result;
    }
}
