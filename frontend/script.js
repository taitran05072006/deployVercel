const nameInput = document.querySelector('#name-input');
const greetButton = document.querySelector('#greet-button');
const greeting = document.querySelector('#greeting');
const countButton = document.querySelector('#count-button');
const countText = document.querySelector('#count');

const formatPrice = (price) => `${new Intl.NumberFormat('vi-VN').format(price)} đ`;

const loadProduct = async () => {
  const responsePanel = document.querySelector('#api-response');

  try {
    const response = await fetch('https://deployvercel-bc6v.onrender.com/api/products/1');

    if (!response.ok) {
      throw new Error(`API trả về mã ${response.status}`);
    }

    const product = await response.json();
    document.querySelector('#product-category').textContent = product.category;
    document.querySelector('#product-name').textContent = product.name;
    document.querySelector('#product-description').textContent = product.description;
    document.querySelector('#product-price').textContent = formatPrice(product.price);
    document.querySelector('#product-stock').textContent = `Kho: ${product.stock} sản phẩm`;
    responsePanel.textContent = JSON.stringify(product, null, 2);
  } catch (error) {
    document.querySelector('#product-category').textContent = 'Chưa kết nối API';
    document.querySelector('#product-name').textContent = 'Hãy khởi động Spring Boot';
    document.querySelector('#product-description').textContent = 'Frontend chưa nhận được dữ liệu từ MySQL. Chạy backend bằng lệnh mvn spring-boot:run.';
    responsePanel.textContent = error.message;
  }
};

loadProduct();

greetButton.addEventListener('click', () => {
  const name = nameInput.value.trim();
  greeting.textContent = name
    ? `Rất vui được gặp bạn, ${name}!`
    : 'Bạn chưa nhập tên. Hãy thử lại nhé!';
});

let count = 0;

countButton.addEventListener('click', () => {
  count += 1;
  countText.textContent = count;
});