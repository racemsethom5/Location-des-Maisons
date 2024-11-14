package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.model.User;

import com.example.demo.service.UserService;

@RestController
public class UserController {
	@Autowired
	private UserService userService;
	
	
	@GetMapping(value="/ListUser")
	
	public List<User> users() {
		List<User> users = userService.findAll();
		return users;

	}
	
	@GetMapping("/UserInfo")
    public User getUserInfo(@RequestParam("id") Long id) {
        java.util.Optional<User> user = userService.findById(id);
        return user.orElse(null);
    }
	
	@PostMapping("/AddUser")
    public User addUser(@RequestBody User user) {
        // Traiter et valider le user reçue
        
		User nouvelleUser = new User();
        nouvelleUser.setUsername(user.getUsername());
        nouvelleUser.setPassword(user.getPassword());
        nouvelleUser.setFirstname(user.getFirstname());
        nouvelleUser.setLastname(user.getLastname());
        nouvelleUser.setEmail(user.getEmail());
        nouvelleUser.setPhone(user.getPhone());
        
        // Sauvegarder la nouvelle maison dans la base de données
        
        nouvelleUser = userService.save(nouvelleUser);
        
        return nouvelleUser;
    }
	
	@DeleteMapping("/removeUser/{id}")
    public ResponseEntity<String> removeOne(@PathVariable("id") long id) {
        userService.removeOne(id);
        return ResponseEntity.ok("User removed successfully");
    }

}
