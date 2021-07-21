package com.example.rems.members.controller;

import java.util.HashMap;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.rems.members.service.MemberService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Controller
public class MemberController {

	private final MemberService memberService;
	
	/**
	* <PRE> 
	* 1. overview : 회원 리스트 조회 (관리자)
	* 2. process flow : 
	* <PRE>
	* @date : 2021. 07. 21.
	* @author : kds
	* @param 
	* @return retMap
	* @throws Exception
	*/
	@GetMapping("members")
	public @ResponseBody HashMap<String, Object> members() throws Exception {
		
		HashMap<String, Object> retMap = new HashMap<String, Object>();
		
	//	retMap = memberService.members();
		
		return retMap;
	}
	
	/**
	* <PRE> 
	* 1. overview : 회원 등록(관리자)
	* 2. process flow : 
	* <PRE>
	* @date : 2021. 07. 21.
	* @author : kds
	* @param 
	* @return retMap
	* @throws Exception
	*/
	@PostMapping("members")
	public @ResponseBody HashMap<String, Object> members(@RequestParam HashMap<String,Object> reqMap) throws Exception {
		
		HashMap<String, Object> retMap = new HashMap<String, Object>();
		
		retMap = memberService.members(reqMap);
		
		return retMap;
	}
}
