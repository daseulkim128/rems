package com.example.demo.controller;

import java.util.HashMap;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.TestService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class TestController {
	
	private final TestService testService;
	
	@PostMapping("pushData")
	public @ResponseBody HashMap<String,Object> pushData(@RequestParam HashMap<String, Object> reqMap) {
		
		HashMap<String,Object> retMap =  testService.pushData(reqMap);
		
	    return retMap;
	}
}
