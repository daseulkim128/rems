package com.example.rems.members.service;

import java.util.HashMap;

import org.springframework.stereotype.Service;

import com.example.rems.members.dao.MemberDao;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class MemberService {
	
	private final MemberDao memberDao;

	public HashMap<String, Object> members(HashMap<String, Object> reqMap) {
		
		return memberDao.members(reqMap);
	}

}
