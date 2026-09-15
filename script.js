const nameInput = document.querySelector('#name-input');
const greetButton = document.querySelector('#greet-button');
const greeting = document.querySelector('#greeting');
const countButton = document.querySelector('#count-button');
const countText = document.querySelector('#count');

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