package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.model.Category;
import com.example.demo.model.Maison;

public interface MaisonService {
	
	Maison save(Maison maison);

	  List<Maison> findAll() ;
	 public long getTotalMaison() ;

	  
	  public List<Maison> orderByDescending();
	  
	  public List<Maison> orderByAscending();
	  
	  
 public List<Maison> orderByDescending1();
	  
	  public List<Maison> orderByAscending1();
	  public   List<Maison> searchByPropertyName(String nom);
	  
	  public   List<Maison> searchByAdress(String adress);
	  public   List<Maison> searchByPrice(int price);
	  
	  
	  
	 // public   List<Maison> searchMaisons(String nom, String adress,Float price );
		
	
	
	Optional<Maison> findById(Long id);
	
	void removeOne(Long id);




	List<Maison> searchByCriteria(String nom, String adress, Integer priceRange, Long categoryId);

	


}
