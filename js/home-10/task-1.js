// 1
const mainListRef = document.querySelector('#categories');
const categoryItemsRef = document.querySelectorAll('.item');
console.log(`У списку ${categoryItemsRef.length} категорії`);
const titelRef = document.querySelectorAll('h2');
[...titelRef].forEach(titel => console.log(`Категорія: ${titel.textContent}`));
[...categoryItemsRef].forEach(categoryItem =>{
    console.log(`Кількість елементів: ${categoryItem.lastElementChild.children.length}`);
});