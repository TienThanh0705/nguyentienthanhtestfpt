const size = document.querySelector('.input');
const result = document.querySelector('.result');
const button = document.querySelector('.submit');

const  random=(n) =>{
  let array = [];
  for (let i = 0; i < n; i++) {
    const element = Math.floor((Math.random() * n) + 1);
    array.push(element);
  }
  result.textContent = JSON.stringify(array);
  return array = [];
}

button.addEventListener('click', () => {
  let length = Number(size.value);
  if (length >= 0 && size.value) {
    random(length);
  } else {
    alert('Please enter number!');
  }
})