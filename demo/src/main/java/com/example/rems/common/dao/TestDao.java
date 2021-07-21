package com.example.rems.common.dao;

import java.util.HashMap;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class TestDao {

	@Autowired
	private SqlSessionTemplate sqlSession;

	public HashMap<String, Object> pushData(HashMap<String, Object> reqMap) {
		
		int result = sqlSession.insert("testSql.pushData", reqMap);
		
		reqMap.put("result", result);
		
		return reqMap;
		
	}

}