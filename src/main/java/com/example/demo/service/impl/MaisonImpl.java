package com.example.demo.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Category;
import com.example.demo.model.Maison;
import com.example.demo.repository.MaisonRepository;
import com.example.demo.service.MaisonService;

@Service
public class MaisonImpl implements MaisonService{
	@Autowired
	private MaisonRepository maisonRepository;
	
	
	@Override
	public long getTotalMaison() {
        return maisonRepository.count();
    }
	
	
	@Override
    public List<Maison> searchByPropertyName(String nom) {
        return maisonRepository.searchByPropertyName(nom);
    } 
	
	@Override
    public List<Maison> searchByAdress(String adress) {
        return maisonRepository.searchByAdress(adress);
        
	} 
	
	@Override
    public List<Maison> searchByPrice(int price) {
        return maisonRepository.searchByPrice(price);
        
	}
	/*@Override
	public List<Maison> searchByCriteria(String nom, String adress, Float price, Long category) {
	    return maisonRepository.searchByCriteria(nom, adress, price, category);
	}*/















	  
	@Override
	public List<Maison> orderByAscending() {
		return maisonRepository.orderByAscending();
	}
	
	@Override
	public List<Maison> orderByDescending1() {
		return maisonRepository.orderByDescending1();
	}
	
	@Override
	public List<Maison> orderByAscending1() {
		return maisonRepository.orderByAscending1();
	}
	
	@Override
	public List<Maison> orderByDescending() {
		return maisonRepository.orderByDescending();
	}
	
	@Override
	public Maison save(Maison maison) {

		return maisonRepository.save(maison);
	}

	@Override
	public List<Maison> findAll() {

		return (List<Maison>) maisonRepository.findAll();
	}

	

	@Override
	public Optional<Maison> findById(Long id) {

		return maisonRepository.findById(id);
	}

	@Override
	public void removeOne(Long id) {
		maisonRepository.deleteById(id);

	}

	@Override
	public List<Maison> searchByCriteria(String nom, String adress, Integer priceRange, Long categoryId) {
		// TODO Auto-generated method stub
		return maisonRepository.searchByCriteria(nom, adress,  priceRange, categoryId);
	}


}
