package com.example.demo.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Category;
import com.example.demo.repository.CategoryRepository;
import com.example.demo.service.CategoryService;

@Service
public class CategoryImpl  implements CategoryService {
	@Autowired
	private CategoryRepository categoryRepository;
	
	@Override
	public Category save(Category cat) {

		return categoryRepository.save(cat);
	}

	@Override
	public List<Category> findAll() {

		return (List<Category>) categoryRepository.findAll();
	}

	

	@Override
	public Optional<Category> findById(Long id) {

		return categoryRepository.findById(id);
	}
	@Override
	 public Optional<Category> findByNom(String nom) {
	        return categoryRepository.findByNom(nom);
	    }

	@Override
	public void removeOne(Long id) {
		categoryRepository.deleteById(id);

	}

}
