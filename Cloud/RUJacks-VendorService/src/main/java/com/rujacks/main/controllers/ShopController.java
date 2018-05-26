package com.rujacks.main.controllers;

import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.rujacks.main.data.ShopRepository;
import com.rujacks.main.exceptions.ShopNotFoundException;
import com.rujacks.main.models.Shop;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@CrossOrigin
public class ShopController {
	
	private final ShopRepository repo;
	
	@GetMapping("/shop/{shopName}")
	public ResponseEntity<Shop> getShop(@PathVariable final String shopName) {
		
		Optional<Shop> shopOpt = repo.findByFullStoreName(shopName);
		
		if(shopOpt.isPresent()) {
			return ResponseEntity.ok(shopOpt.get());
		} else {
			throw new ShopNotFoundException("No shop with shop name " + shopName + " was found.");
		}
	}
	
	@PostMapping("/shop/{shopName}")
	public ResponseEntity<Void> createShop(@PathVariable final String shopName, @RequestBody final Shop shop) {
		
		Optional<Shop> shopOpt = repo.findByFullStoreName(shopName);
		
		if(!shopOpt.isPresent()) {
			repo.save(shop);
			return ResponseEntity.noContent().build();
		} else {
			return ResponseEntity.badRequest().build();
		}
	}
	
	@DeleteMapping("/shop/{shopName}")
	public ResponseEntity<Void> deleteShop(@PathVariable final String shopName) {
		repo.deleteByFullStoreName(shopName);
		
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/shop/{shopName}")
	public ResponseEntity<Void> updateShop(@PathVariable final String shopName, @RequestBody final Shop newShop) {
		Optional<Shop> shopOpt = repo.findByFullStoreName(shopName);
		
		if(shopOpt.isPresent()) {
			repo.save(newShop);
			return ResponseEntity.noContent().build();
		} else {
			return ResponseEntity.badRequest().build();
		}
	}

}
