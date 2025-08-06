package com.programming.techie.authcode.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/home")
    public String home(){
        //"home" is the name of the html file that is going to serve the request
        //When a request comes to the /home then request will be redirected to the home.html page
        return "home";
    }
}

