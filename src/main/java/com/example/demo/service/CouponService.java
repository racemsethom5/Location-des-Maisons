package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.model.CouponCode;

public interface CouponService {
	CouponCode save(CouponCode coupon);

	  List<CouponCode> findAll() ;

	  
	 
		
	
	
	Optional<CouponCode> findById(Long id);
	
	void removeOne(Long id);

}
