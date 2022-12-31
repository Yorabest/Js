// const containerRef = document.querySelector('.counter')
// const spanRef = document.querySelector('#value');
// const counterValue = spanRef.content;
// console.log(spanRef.previousSibling);
// const decrement = event => event.innerHTML -= 1;
// const increment = event => event.innerHTML += 1;
// console.log();
// // const bthRef = document.querySelectorAll('button')
// spanRef.previousSibling.addEventListener('click', decrement);
// spanRef.nextSibling.addEventListener('click',increment)
// console.log(counterValue);


const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);

let counterValue = 0;

function increment() {
    value.textContent = counterValue += 1;
}

function decrement() {
    value.textContent = counterValue -= 1;
}