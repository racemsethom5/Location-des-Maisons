package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.CouponCode;

public interface CouponRepository extends JpaRepository<CouponCode, Long> {
	
Optional<CouponCode> findById(Long id);
	
	public List<CouponCode> findAll();



}
