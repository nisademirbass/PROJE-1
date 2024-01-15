package com.hnd.category.controller;

import com.hnd.category.model.Category;
import com.hnd.category.service.CategoryService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@Slf4j
@RestController
@RequestMapping("category")
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;
    @GetMapping("/{category}")
    public Category getCategory(@RequestParam("categoryId")@PathVariable("categoryId") Integer categoryId) {
        log.debug("[{}][getCategory] -> request: {}", this.getClass().getSimpleName(), categoryId);
        return categoryService.getCategory(categoryId);
    }

    @GetMapping("/categories")
    public List<Category> getCategories() {
        log.debug("Category Service called...");
        return categoryService.getCategories();
    }
}
