// Create the variables to hold the HTML DOM elements
const theForm = document.querySelector('#sign-up-form');
const nameInput = document.querySelector('#user-name');
const emailInput = document.querySelector('#email');
const message = document.querySelector('.msg');

theForm.addEventListener('submit', onSubmit);

function onSubmit(e1) {
    e1.preventDefault(); // Prevent the default action from happening, like submit

    if(nameInput.value == '' || emailInput.value == '') {

        message.innerText = "Please fill both fields before submitting!";
        message.classList.add('error'); // Add the error class in the stylesheet to the element

    } else {
    }
}
