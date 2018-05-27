package com.rujacks.main.data;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.rujacks.main.models.User;

@Repository
public interface UserRepository extends CrudRepository<User, String> {
	
	public List<User> findByShippingAddress(String shippingAddress);
	
	public Optional<User> findByWalletId(String walletId);
	
	public void deleteByWalletId(String walletId);

}
