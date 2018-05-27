package com.rujacks.main.controllers;

import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.rujacks.main.data.UserRepository;
import com.rujacks.main.exceptions.UserNotFoundException;
import com.rujacks.main.models.User;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@AllArgsConstructor
@CrossOrigin
@Slf4j
public class UserController {

	private final UserRepository repo;

	@GetMapping("/{walletId}")
	public ResponseEntity<User> getUser(@PathVariable final String walletId) {

		Optional<User> user = repo.findByWalletId(walletId);

		if(user.isPresent()) {
			return new ResponseEntity<User>(user.get(), HttpStatus.OK);
		} else {
			throw new UserNotFoundException("User with walletId " + walletId  + " not found.");
		}

	}

	@PostMapping("/{walletId}")
	public ResponseEntity<Void> registerUser(@PathVariable final String walletId, @RequestBody User user) {

		Optional<User> testUser = repo.findByWalletId(walletId);
		
		if(!testUser.isPresent()) {
			repo.save(user);
			return ResponseEntity.ok().build();
		} else {
			log.warn("User registration attempted, non unique wallet ID given.");
			return ResponseEntity.badRequest().build();
		}
	}
	
	@DeleteMapping("/{walletId}")
	public ResponseEntity<Void> deleteUser(@PathVariable final String walletId) {
		repo.deleteByWalletId(walletId);
		return ResponseEntity.noContent().build();
	}

}
