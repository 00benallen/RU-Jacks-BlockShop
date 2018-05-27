package com.rujacks.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("com.rujacks")
@EntityScan("com.rujacks")
public class RuJacksVendorServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(RuJacksVendorServiceApplication.class, args);
	}
}
