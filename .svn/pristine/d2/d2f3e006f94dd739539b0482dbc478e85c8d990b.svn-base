package com.future.my.free.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.future.my.free.dao.IFreeBoardDAO;
import com.future.my.free.vo.FreeBoardVO;

@Service("freeBoardService")
public class FreeBoardServiceImpl implements FreeBoardService {

	@Autowired
	IFreeBoardDAO dao;
	
	
	//	테스트
	@Override
	public List<FreeBoardVO> getBoardList() {
		return dao.getBoardList();
	}

}
