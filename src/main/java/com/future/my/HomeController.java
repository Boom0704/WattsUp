package com.future.my;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;

import java.util.HashMap;
import java.util.List;

import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;


import com.future.my.common.service.WeatherService;

/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {
	
	
	@Autowired
	WeatherService weatherservice;
	
	@RequestMapping("/")
	public String getWeather(Model model) {
		
		LocalDate currentDate = LocalDate.now();
        LocalTime currentTime = LocalTime.now();
        DayOfWeek dayOfWeek = currentDate.getDayOfWeek(); 
        
        DateTimeFormatter formatter1 = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        DateTimeFormatter formatter2 = DateTimeFormatter.ofPattern("HH:mm:ss");
        DateTimeFormatter formatter3 = DateTimeFormatter.ofPattern("yyyyMMdd");
        
        String formattedDate = currentDate.format(formatter1);
        String formattedDate3 = currentDate.format(formatter3);
        String formattedTime = currentTime.format(formatter2);
        
        String baseDate = formattedDate3;
        
        String oClock = formattedTime.substring(0,2);
        String baseTime = oClock+"00";
        
        //구 별 정보
        List<Map<String, String>> locations = new ArrayList<>();

        Map<String, String> daejeon1 = new HashMap<>();
        daejeon1.put("gu", "대덕구");
        daejeon1.put("nx", "68");
        daejeon1.put("ny", "100");
        locations.add(daejeon1);

        Map<String, String> daejeon2 = new HashMap<>();
        daejeon2.put("gu", "서구");
        daejeon2.put("nx", "67");
        daejeon2.put("ny", "100");
        locations.add(daejeon2);

        Map<String, String> daejeon3 = new HashMap<>();
        daejeon3.put("gu", "유성구");
        daejeon3.put("nx", "67");
        daejeon3.put("ny", "101");
        locations.add(daejeon3);

        Map<String, String> daejeon4 = new HashMap<>();
        daejeon4.put("gu", "동구");
        daejeon4.put("nx", "68");
        daejeon4.put("ny", "100");
        locations.add(daejeon4);

        Map<String, String> daejeon5 = new HashMap<>();
        daejeon5.put("gu", "중구");
        daejeon5.put("nx", "68");
        daejeon5.put("ny", "100");
        locations.add(daejeon5);
        
        for (Map<String, String> location : locations) {
            String nx = location.get("nx");
            String ny = location.get("ny");
            Map<String, String> weather = weatherservice.getWeather(nx, ny, baseDate, baseTime);
            location.put("temperature", weather.get("T1H")); // 기온
            location.put("rain", weather.get("RN1"));        // 강수량
            location.put("humidity", weather.get("REH"));    // 습도
            location.put("wind", weather.get("WSD"));        // 바람
            location.put("description", getWeatherDescription(Integer.parseInt(weather.getOrDefault("PTY", "0"))));
        }
        //대전 정보
    	Map<String, String> daejeonWeather = weatherservice.getWeather("67", "100", baseDate, baseTime);
		
    	model.addAttribute("dayOfWeek", dayOfWeek);
		model.addAttribute("date", formattedDate);
		model.addAttribute("standardTime", oClock);
		model.addAttribute("locations", locations);
		model.addAttribute("daejeonWeather", daejeonWeather);
		
		return "/home";
	}
	
	private String getWeatherDescription(int pty) {
	    switch (pty) {
		    case 0: return "맑음";
	        case 1: return "비";
	        case 2: return "비/눈";
	        case 3: return "눈";
	        case 4: return "소나기";
	        case 5: return "빗방울";
	        case 6: return "빗방울/눈날림";
	        case 7: return "눈날림";
	        default: return "알 수 없음";
	    }
	}
}
