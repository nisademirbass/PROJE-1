package com.hnd.productservice.request;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ProductCreateRequest {
    private String productName;
    private Integer quantity;
    private Double price;
}
