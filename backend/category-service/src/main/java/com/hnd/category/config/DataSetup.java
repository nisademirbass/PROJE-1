package com.hnd.category.config;

import java.util.Arrays;

import com.hnd.category.model.Category;
import com.hnd.category.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;


import jakarta.annotation.PostConstruct;

@Configuration
public class DataSetup {
    @Autowired
    private CategoryRepository categoryRepository;
    @PostConstruct
    public void setupData() {
        categoryRepository.saveAll(Arrays.asList(
                Category.builder().categoryId(1).categoryName("Gıda").build(),
                Category.builder().categoryId(2).categoryName("Mobilya").build(),
                Category.builder().categoryId(3).categoryName("Elektronik").build(),
                Category.builder().categoryId(4).categoryName("Giyim").build(),
                Category.builder().categoryId(5).categoryName("Araç").build(),
                Category.builder().categoryId(6).categoryName("Diğer").build(),
                Category.builder().categoryId(7).categoryName("Takı").build()));
    }
}
