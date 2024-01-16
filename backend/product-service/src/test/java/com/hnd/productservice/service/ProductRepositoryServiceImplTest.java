package com.hnd.productservice.service;

import com.hnd.productservice.enums.Language;
import com.hnd.productservice.repository.ProductRepository;
import com.hnd.productservice.repository.entity.Product;
import com.hnd.productservice.request.ProductCreateRequest;
import com.hnd.productservice.service.impl.ProductRepositoryServiceImpl;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Date;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;

@SpringBootTest
class ProductRepositoryServiceImplTest {

    @Mock
    private ProductRepository productRepository;

    @InjectMocks
    private ProductRepositoryServiceImpl productService;

    @Test
    void createProduct_Success() {
        // Arrange
        Language language = Language.EN;
        ProductCreateRequest request = new ProductCreateRequest("Product 1", 10, 25.0);

        Product expectedProduct = new Product();
        expectedProduct.setProductName(request.getProductName());
        expectedProduct.setQuantity(request.getQuantity());
        expectedProduct.setPrice(request.getPrice());
        expectedProduct.setProductCreatedDate(new Date());
        expectedProduct.setProductUpdatedDate(new Date());
        expectedProduct.setDeleted(false);

        Mockito.when(productRepository.save(any(Product.class))).thenReturn(expectedProduct);

        // Act
        Product actualProduct = productService.createProduct(language, request);

        // Assert
        assertNotNull(actualProduct);
        assertEquals(expectedProduct.getProductName(), actualProduct.getProductName());
        // Add more assertions based on your needs
    }

    @Test
    void getProduct_Success() {
        // Arrange
        Language language = Language.EN;
        Long productId = 1L;

        Product expectedProduct = new Product();
        expectedProduct.setProductId(Integer.valueOf(String.valueOf(productId)));
        expectedProduct.setProductName("Product 1");

        Mockito.when(productRepository.getByProductIdAndDeletedFalse(productId)).thenReturn(expectedProduct);

        // Act
        Product actualProduct = productService.getProduct(language, productId);

        // Assert
        assertNotNull(actualProduct);
        assertEquals(expectedProduct.getProductId(), actualProduct.getProductId());
        // Add more assertions based on your needs
    }

    // Similar tests can be written for getProducts, getProductsByCategoryId, updateProduct, and deleteProduct methods
}
