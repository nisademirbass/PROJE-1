package com.hnd.productservice.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController {

    @GetMapping(value = "/")
    public String redirectToSwagger() {
        return "redirect:/swagger-ui.html";
    }
}
