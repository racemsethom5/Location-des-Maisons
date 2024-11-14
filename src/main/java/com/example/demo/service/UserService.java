package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.model.User;



public interface UserService {
	
    //User findByUsername(String username);
	
	//User findByEmail (String email);
	
	User save(User user);

	List<User> findAll() ;

	  
	 
		
	
	
	Optional<User> findById(Long id);
	
	void removeOne(Long id);
}
