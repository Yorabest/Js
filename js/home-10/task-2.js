const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

const listRef = document.querySelector('#ingredients');

// textEl.textContent = 'fgfgf'
// console.log(itemEl.appendChild(textEl));
// console.log(listRef.appendChild(itemEl));
// console.log(listRef);
ingredients.map(ingradient => {
   const itemEl = document.createElement('li');
   const textEl = document.createElement('p');
   itemEl.appendChild(textEl); 
    textEl.textContent = ingradient;
    listRef.appendChild(itemEl)
}
)
