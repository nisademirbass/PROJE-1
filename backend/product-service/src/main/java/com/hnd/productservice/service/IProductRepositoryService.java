package com.hnd.productservice.service;

import com.hnd.productservice.enums.Language;
import com.hnd.productservice.repository.entity.Product;
import com.hnd.productservice.request.ProductCreateRequest;
import com.hnd.productservice.request.ProductUpdateRequest;

import java.util.List;

public interface IProductRepositoryService {

    Product createProduct(Language language, ProductCreateRequest productCreateRequest);

    Product getProduct(Language language, Long productId);

    List<Product> getProducts(Language language);
    List<Product> getProductsByCategoryId(Language language, Integer categoryId);

    Product updateProduct(Language language, Long productId, ProductUpdateRequest productUpdateRequest);

    Product deleteProduct(Language language, Long productId);

}
