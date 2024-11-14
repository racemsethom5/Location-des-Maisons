package com.example.demo.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.CouponCode;
import com.example.demo.repository.CouponRepository;
import com.example.demo.service.CouponService;

@Service
public class CouponImpl implements CouponService {
	@Autowired
	private CouponRepository couponRepository;
	
	@Override
	public CouponCode save(CouponCode coupon) {

		return couponRepository.save(coupon);
	}

	@Override
	public List<CouponCode> findAll() {

		return (List<CouponCode>) couponRepository.findAll();
	}

	

	@Override
	public Optional<CouponCode> findById(Long id) {

		return couponRepository.findById(id);
	}

	@Override
	public void removeOne(Long id) {
		couponRepository.deleteById(id);

	}

}
