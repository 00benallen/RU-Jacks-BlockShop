package com.rujacks.main.exceptions;

public class ShopNotFoundException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	public ShopNotFoundException() {
		super();
	}
	
	public ShopNotFoundException(String message) {
		super(message);
	}
	
	public ShopNotFoundException(String message, Exception cause) {
		super(message, cause);
	}

}
