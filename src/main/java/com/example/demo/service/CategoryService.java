package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.model.Category;

public interface CategoryService {
	Category save(Category cat);

	  List<Category> findAll() ;

	  
	 
		
	
	Optional<Category> findByNom(String nom);
	Optional<Category> findById(Long id);
	
	void removeOne(Long id);

}
