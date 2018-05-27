package com.rujacks.main.controllers;

import java.util.List;
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
import com.rujacks.main.models.Product;
import com.rujacks.main.models.Shop;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@CrossOrigin
public class ProductController {
	
	private final ShopRepository repo;
	
	@PostMapping("/shop/{shopName}/products/")
	public ResponseEntity<Shop> addProducts(@PathVariable final String shopName,
											@RequestBody final List<Product> products) {
		
		
		Optional<Shop> shopOpt = repo.findByFullStoreName(shopName);
		
		if(shopOpt.isPresent()) {
			
			shopOpt.get().getProducts().addAll(products);
			repo.save(shopOpt.get());
			
			return ResponseEntity.ok(shopOpt.get());
			
			
		} else {
			return ResponseEntity.badRequest().build();
		}
	}
	
	@GetMapping("/shop/{shopName}/products/")
	public ResponseEntity<List<Product>> getProducts(
			@PathVariable final String shopName,
			@PathVariable final String productName) {
		Optional<Shop> shopOpt = repo.findByFullStoreName(shopName);
		
		if(shopOpt.isPresent()) {	
			return ResponseEntity.ok(shopOpt.get().getProducts());
		} else {
			return ResponseEntity.badRequest().build();
		}
	}
	
	@GetMapping("/shop/{shopName}/products/{productName}")
	public ResponseEntity<Product> getProduct(
			@PathVariable final String shopName,
			@PathVariable final String productName) {
		Optional<Shop> shopOpt = repo.findByFullStoreName(shopName);
		
		if(shopOpt.isPresent()) {	
			for(Product product: shopOpt.get().getProducts()) {
				if(product.getProductName().equals(productName)) {
					return ResponseEntity.ok(product);
				}
			}
			return ResponseEntity.badRequest().build();
		} else {
			return ResponseEntity.badRequest().build();
		}
	}
	
	@PutMapping("/shop/{shopName}/products/{productName}")
	public ResponseEntity<Void> updateProduct(
			@PathVariable final String shopName,
			@PathVariable final String productName,
			@RequestBody final Product newProduct) {
		
		
		Optional<Shop> shopOpt = repo.findByFullStoreName(shopName);
		
		if(shopOpt.isPresent()) {	
			Shop shop = shopOpt.get();
			List<Product> products = shop.getProducts();
			for(Product product: products) {
				if(product.getProductName().equals(productName)) {
					products.remove(product);
					products.add(newProduct);
					
					shop.setProducts(products);
					repo.deleteByFullStoreName(shopName);
					repo.save(shop);
					return ResponseEntity.noContent().build();
				}
			}
			return ResponseEntity.badRequest().build();
		} else {
			return ResponseEntity.badRequest().build();
		}
	}
	
	@DeleteMapping("/shop/{shopName}/products/{productName}")
	public ResponseEntity<Void> deleteProduct(
			@PathVariable final String shopName,
			@PathVariable final String productName,
			@RequestBody final Product newProduct) {
		
		
		Optional<Shop> shopOpt = repo.findByFullStoreName(shopName);
		
		if(shopOpt.isPresent()) {	
			for(Product product: shopOpt.get().getProducts()) {
				if(product.getProductName().equals(productName)) {
					shopOpt.get().getProducts().remove(product);
					repo.save(shopOpt.get());
					return ResponseEntity.noContent().build();
				}
			}
			return ResponseEntity.badRequest().build();
		} else {
			return ResponseEntity.badRequest().build();
		}
	}

}
