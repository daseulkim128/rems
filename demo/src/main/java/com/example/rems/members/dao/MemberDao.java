package com.example.rems.members.dao;

import java.util.HashMap;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class MemberDao {

	@Autowired
	private SqlSessionTemplate sqlSession;
	
	public HashMap<String, Object> members(HashMap<String, Object> reqMap) {

		int result = sqlSession.insert("memberSql.members", reqMap);
		
		HashMap<String, Object> retMap = new HashMap<String, Object>();
		
		retMap.put("result", result);
		
		return retMap;
	}

}
