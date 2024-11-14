package com.example.demo.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.UserService;

@Service
public class UserImpl  implements UserService {
	@Autowired
	private UserRepository userRepository;
	
	@Override
	public User save(User user) {

		return userRepository.save(user);
	}

	@Override
	public List<User> findAll() {

		return (List<User>) userRepository.findAll();
	}

	

	@Override
	public Optional<User> findById(Long id) {

		return userRepository.findById(id);
	}

	@Override
	public void removeOne(Long id) {
		userRepository.deleteById(id);

	}

}
