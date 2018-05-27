package com.rujacks.main.data;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.rujacks.main.models.Shop;

public interface ShopRepository extends CrudRepository<Shop, String>{

	public Optional<Shop> findByFullStoreName(String fullStoreName);
	
	public void deleteByFullStoreName(String fullStoreName);
	
}
