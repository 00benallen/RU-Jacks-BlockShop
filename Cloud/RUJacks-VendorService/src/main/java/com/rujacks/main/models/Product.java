package com.rujacks.main.models;

import lombok.Data;

@Data
public class Product {
	
	private String productName;
	
	private String productPicture;
	
	private int price;
	
	private int stock;
	
	private boolean featured;

}
