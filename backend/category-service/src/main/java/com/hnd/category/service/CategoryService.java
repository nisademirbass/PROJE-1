package com.hnd.category.service;


import com.hnd.category.model.Category;

import java.util.List;

public interface CategoryService {
    Category getCategory(Integer categoryId);

    List<Category> getCategories();
}
