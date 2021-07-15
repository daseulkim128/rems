package com.example.demo.service;

import java.util.HashMap;

import org.springframework.stereotype.Service;

import com.example.demo.dao.TestDao;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class TestService {

	private final TestDao testDao;
	
	public HashMap<String, Object> pushData(HashMap<String, Object> reqMap) {

		return testDao.pushData(reqMap);
	}

}
