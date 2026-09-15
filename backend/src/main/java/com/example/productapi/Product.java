package com.example.productapi;

import java.math.BigDecimal;

public record Product(
        Long id,
        String name,
        String category,
        BigDecimal price,
        Integer stock,
        String description
) {
}
