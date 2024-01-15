package com.hnd.productservice.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class ProductResponse {
    private Integer productId;
    private Integer categoryId;
    private String productName;
    private Integer quantity;
    private Double price;
    private String description;
    private Long productCreatedDate;
    private Long productUpdatedDate;
}
