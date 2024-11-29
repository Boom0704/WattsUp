package com.future.my.tip.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Class Name  : TipController
 * Author      : boom
 * Created Date: 2024. 11. 19.
 * Version: 1.0
 * Purpose:   
 * Description: 
 */
@Controller
public class TipController {
	
	//팁뷰로 이동
	@RequestMapping("/tipView")
	public String tipView() {
		return "tip/tipView";
	}
}
