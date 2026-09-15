# Product API với Spring Boot và MySQL

## 1. Tạo database và chạy API

MySQL cần đang chạy. Nếu tài khoản `root` có mật khẩu, đặt biến môi trường trước khi chạy:

```bash
export DB_USERNAME=root
export DB_PASSWORD=mat_khau_mysql
cd backend
mvn spring-boot:run
```

Ứng dụng tự tạo database `web_demo`, bảng `products` và thêm sản phẩm mẫu từ `schema.sql`/`data.sql`.

## 2. Kiểm tra API

Mở URL sau khi ứng dụng chạy:

```bash
curl http://localhost:8080/api/products/1
```

API trả về JSON sản phẩm lấy trực tiếp từ MySQL. Mở `index.html` ở thư mục gốc để frontend gọi API này.
