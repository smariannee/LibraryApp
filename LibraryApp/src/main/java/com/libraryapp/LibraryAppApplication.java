package com.libraryapp;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@MapperScan("com.libraryapp.mapper")
@SpringBootApplication
public class LibraryAppApplication {
	public static void main(String[] args) {
		SpringApplication.run(LibraryAppApplication.class, args);
	}
}
