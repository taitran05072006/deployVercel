INSERT INTO products (id, name, category, price, stock, description)
VALUES (1, 'Cà phê rang xay Arabica', 'Đồ uống', 185000, 24, 'Hạt Arabica rang vừa, hương thơm dịu và vị chua thanh cân bằng.')
ON DUPLICATE KEY UPDATE
    name = VALUES(name),
    category = VALUES(category),
    price = VALUES(price),
    stock = VALUES(stock),
    description = VALUES(description);
