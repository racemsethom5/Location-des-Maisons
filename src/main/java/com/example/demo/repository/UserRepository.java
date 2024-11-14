package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
	User findByUsername(String username) ;
	User findByEmail(String email) ;
	Optional <User> findById(Long id);
	User save(Optional<User>user);
	public List<User> findAll();

}
