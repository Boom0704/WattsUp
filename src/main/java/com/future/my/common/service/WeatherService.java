package com.future.my.common.service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;


@Service
public class WeatherService {
	
	public Map<String, String> getWeather(String nx, String ny, String baseDate, String baseTime) {
        
        Map<String, String> result = new HashMap<>();
		String serviceKey = "Yvh2WWqSJalXUYG1RkLVYtp8nFdY6qpVlPY5d4ElBkqp7HN2zHDZtIENIuajHmLJ5KNg0Zm3FFcZl2QVvvBhAw==";
		String urlString = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst" +
	            "?serviceKey=" + serviceKey +
	            "&numOfRows=10" +
	            "&pageNo=1" +
	            "&dataType=JSON" +
	            "&base_date=" + baseDate +
	            "&base_time=" + baseTime +
	            "&nx=" + nx +
	            "&ny=" + ny;
		
		try {
			URL url = new URL(urlString);
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setRequestMethod("GET");
			conn.setRequestProperty("Content-Type", "application/json");
			
			int responseCode = conn.getResponseCode();
			if (responseCode == HttpURLConnection.HTTP_OK) {
				BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()));
				StringBuilder response = new StringBuilder();
				String inputLine;
				while ((inputLine = in.readLine()) != null) {
	                response.append(inputLine);
	            }
	            in.close();
	            
	            ObjectMapper mapper = new ObjectMapper();
	            JsonNode rootNode = mapper.readTree(response.toString());
	            JsonNode items = rootNode.path("response").path("body").path("items").path("item");
				
	            if (items.isArray()) {
	            	for (JsonNode item : items) {
	            		String category = item.path("category").asText();
	            		String obsrValue = item.path("obsrValue").asText();
	                    result.put(category, obsrValue);
	            	}
	            } else {
	            	System.out.println("Items is not an array");
	            }
			}else {
				System.out.println("HTTP error code: " + responseCode);
			}
		} catch(Exception e) {
	        e.printStackTrace();
		}
		
		return result;
	}
}

