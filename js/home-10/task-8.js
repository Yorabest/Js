const inputRef = document.querySelector('[step="1"]');
const renderRef = document.querySelector('[data-action="render"]');
const destroyRef = document.querySelector('[ data-action="destroy"]');
const boxesRef = document.querySelector('#boxes')

// boxesRef.insertAdjacentHTML('li*4') -

inputRef.addEventListener('input', hendlerNumderOfBoxes);
renderRef.addEventListener('click', hendlerRenderBoxes);
destroyRef.addEventListener('click', destroyBoxes);

let numderOfBoxes = 0;
boxesRef.height = '100 %';
// const random = parseInt(Math.random() * (225 - 0) + 0);

boxesRef.insertAdjacentHTML('beforeend', '<div style="background-color:rgb(225, 40, 69)" padding="100px" width="200" clientHeight="200"><li></li></div>');
 console.log(boxesRef);
function hendlerNumderOfBoxes(event) {
    numderOfBoxes = Number(event.currentTarget.value);
    return numderOfBoxes;
};
function hendlerRenderBoxes() {
    let box = 0
    let size = 30;
    // console.log(numderOfBoxes);
    while (box < numderOfBoxes) {
        const r = parseInt(Math.random() * 255);
        const g = parseInt(Math.random() * 255);
        const b = parseInt(Math.random() * 255);
        console.log(size);
        const color = `rgb(${r}, ${g}, ${b})`;
        boxesRef.insertAdjacentHTML('beforeend', `<div style="background-color:${color}" width="${size}" height="${size}"><li></li></div>`);
        size += 10;
        box += 1;
    }
}
function destroyBoxes() {
    // boxesRef.innerHTML('');
};
    // rgb(225, 40, 69)