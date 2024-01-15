package com.hnd.category.service.impl;

import com.hnd.category.model.Category;
import com.hnd.category.repository.CategoryRepository;
import com.hnd.category.service.CategoryService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Slf4j
@Service
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;
    public Category getCategory(Integer categoryId) {
        return categoryRepository.findByCategoryId(categoryId)
                .orElseThrow(() -> new RuntimeException("Category Not Found: " + categoryId));
    }

    public List<Category> getCategories() {
        return categoryRepository.findAll();
    }
}
