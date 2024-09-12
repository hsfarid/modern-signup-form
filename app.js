// JavaScript code to show and hide password 

// get html elements 
const passwordInput = document.getElementById(('js-input-password'))
const eyeIcon = document.querySelector(".eye-icon")

// add click event listener to the eye icon 
eyeIcon.addEventListener('click', () => {
    if(passwordInput.type === 'password'){
        passwordInput.type = 'text'
        eyeIcon.className = 'fa fa-eye-slash eye-icon'
    }
    else{
        passwordInput.type = 'password'
        eyeIcon.className = 'fa fa-eye eye-icon'
    }
})