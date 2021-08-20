/**
 * Log in page
 */

// Handle
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const showIcon = document.getElementById('togglePassword');
const submitBtn = document.getElementById('submit');


// password show hide event
showIcon.addEventListener('click',function(){
    let currentIcon = this.classList;

    if(currentIcon == 'bi bi-eye-slash'){
        //show value
        passwordField.type = 'text';
        //change icon
        this.classList = 'bi bi-eye';

    }else{
        passwordField.type = 'password';
        this.classList = 'bi bi-eye-slash';
    }
})


// submit event

submitBtn.addEventListener('click',(e)=>{
    // user email
    const userEmail = emailField.value;
    // user password
    const userPassword = passwordField.value;

    // statement
    if(userEmail == 'example@email.com' && userPassword == 'agent007'){
        // redirect to account page
        window.location.href = 'account.html';
    }
})
