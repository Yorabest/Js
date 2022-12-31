const inputRef = document.querySelector('[step="1"]');
const renderRef = document.querySelector('[data-action="render"]');
const destroyRef = document.querySelector('[ data-action="destroy"]');
const boxesRef = document.querySelector('#boxes')

inputRef.addEventListener('input', hendlerNumderOfBoxes);
renderRef.addEventListener('click', hendlerRenderBoxes);
destroyRef.addEventListener('click',  hendlerDestroyBoxes);

let numderOfBoxes = 0;

function hendlerNumderOfBoxes(event) {
    numderOfBoxes = Number(event.currentTarget.value);
    return numderOfBoxes;
};
function hendlerRenderBoxes() {
    let box = 0
    let size = 30;
    while (box < numderOfBoxes) {
        const r = parseInt(Math.random() * 255);
        const g = parseInt(Math.random() * 255);
        const b = parseInt(Math.random() * 255);    
        const color = `rgb(${r}, ${g}, ${b})`;
        boxesRef.insertAdjacentHTML('beforeend', `<div style="background-color:${color}; width:${size}px; height:${size}px"></div>`);
        size += 10;
        box += 1;
    }
}
function hendlerDestroyBoxes() {
    boxesRef.innerHTML = "";
};