package com.future.my.chart.vo;

import lombok.Data;

@Data
public class ChartVO {
	private String mainId;
	private String corpName;
	private String useYear;
	private String useMonth;
	private int elecUse;
	private int gasUse;
	private int totalUse;
	private String elecToe;
	private String gasToe;
	private String totalToe;
	private int maxElecUse;
	private int maxGasUse;
	
}
