package com.vultr.vultrfintracker.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1/hello")
public class HelloController {
    @GetMapping("/welcome")
    public String getGreeting(){
        return "Hello vultr";
    }
}
