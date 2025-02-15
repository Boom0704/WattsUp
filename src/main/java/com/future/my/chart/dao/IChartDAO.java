package com.future.my.chart.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.future.my.chart.vo.ChartVO;

@Mapper
public interface  IChartDAO {
	public List<ChartVO> getChartList(String corp);
	public List<ChartVO> getMonthChart(ChartVO searchVO);
}
