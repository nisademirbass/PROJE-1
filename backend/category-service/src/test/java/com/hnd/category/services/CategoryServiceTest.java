package com.hnd.category.services;

import com.hnd.category.model.Category;
import com.hnd.category.repository.CategoryRepository;
import com.hnd.category.service.impl.CategoryServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

@SpringBootTest
class CategoryServiceImplTest {

    @Mock
    private CategoryRepository categoryRepository;

    @InjectMocks
    private CategoryServiceImpl categoryService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetCategory() {
        // Mock veri ve davranışları ayarla
        Integer categoryId = 1;
        Category mockCategory = new Category(categoryId, "TestCategory");
        when(categoryRepository.findByCategoryId(categoryId)).thenReturn(Optional.of(mockCategory));

        // Servis metodunu çağır
        Category result = categoryService.getCategory(categoryId);

        // Beklenen sonuçları kontrol et
        assertEquals(mockCategory, result);

        // Repository metodunun doğru çağrılıp çağrılmadığını kontrol et
        verify(categoryRepository, times(1)).findByCategoryId(categoryId);
    }

    @Test
    void testGetCategoryNotFound() {
        // Mock veri ve davranışları ayarla
        Integer categoryId = 1;
        when(categoryRepository.findByCategoryId(categoryId)).thenReturn(Optional.empty());

        // Servis metodunu çağır ve beklenen bir RuntimeException al
        assertThrows(RuntimeException.class, () -> categoryService.getCategory(categoryId));

        // Repository metodunun doğru çağrılıp çağrılmadığını kontrol et
        verify(categoryRepository, times(1)).findByCategoryId(categoryId);
    }

    @Test
    void testGetCategories() {
        // Mock veri ve davranışları ayarla
        List<Category> mockCategories = Arrays.asList(
                new Category(1, "TestCategory1"),
                new Category(2, "TestCategory2")
        );
        when(categoryRepository.findAll()).thenReturn(mockCategories);

        // Servis metodunu çağır
        List<Category> result = categoryService.getCategories();

        // Beklenen sonuçları kontrol et
        assertEquals(mockCategories, result);

        // Repository metodunun doğru çağrılıp çağrılmadığını kontrol et
        verify(categoryRepository, times(1)).findAll();
    }
}
