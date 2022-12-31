const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

inputRef.addEventListener('input', hendlerFrontSize);

function hendlerFrontSize(event) {
    textRef.style.fontSize = event.currentTarget.value + 'px';
}
