package com.hnd.category.integration;

import com.hnd.category.model.Category;
import com.hnd.category.service.CategoryService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.Arrays;
import java.util.List;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class CategoryControllerIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private CategoryService categoryService;

    @Test
    void testGetCategory() throws Exception {
        // Mock veri ve davranışları ayarla
        Integer categoryId = 1;
        Category mockCategory = new Category(categoryId, "TestCategory");
        when(categoryService.getCategory(categoryId)).thenReturn(mockCategory);

        // API endpoint'ini test et
        mockMvc.perform(MockMvcRequestBuilders.get("/category/{categoryId}", categoryId)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.categoryId").value(categoryId))
                .andExpect(jsonPath("$.categoryName").value("TestCategory"));
    }

    @Test
    void testGetCategories() throws Exception {
        // Mock veri ve davranışları ayarla
        List<Category> mockCategories = Arrays.asList(
                new Category(1, "TestCategory1"),
                new Category(2, "TestCategory2")
        );
        when(categoryService.getCategories()).thenReturn(mockCategories);

        // API endpoint'ini test et
        mockMvc.perform(MockMvcRequestBuilders.get("/category/categories")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").isArray())
                .andExpect(jsonPath("$[0].categoryId").value(1))
                .andExpect(jsonPath("$[0].categoryName").value("TestCategory1"))
                .andExpect(jsonPath("$[1].categoryId").value(2))
                .andExpect(jsonPath("$[1].categoryName").value("TestCategory2"));
    }
}
