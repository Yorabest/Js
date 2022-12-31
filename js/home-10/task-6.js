const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', lenght);

// намагалась робити через inputRef.data-length, але зелений колір не з'являється 

// function lenght(event) {
//     if (event.currentTarget.value.length >= Number(inputRef.data-length)) {
//         inputRef.classList.add('valid');
//         inputRef.classList.remove('invalid');
//     } else {
//         inputRef.classList.add('invalid');
//         inputRef.classList.remove('valid');
//     };
// };

function lenght(event) {
    if (event.currentTarget.value.length >= 6) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
    } else {
        inputRef.classList.add('invalid');
        inputRef.classList.remove('valid');
    };
};
