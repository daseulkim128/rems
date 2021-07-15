package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class ViewController {

	@GetMapping("{url}")
	public String home(@PathVariable("url") String url ) {
		return url;
	}
}
