/**
 * Log in page
 */

// btn event
const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click',(e)=>{
    // user email
    const emailField = document.getElementById('email');
    const userEmail = emailField.value;
    // user password
    const passwordField = document.getElementById('password');
    const userPassword = passwordField.value;

    // statement
    if(userEmail == 'example@email.com' && userPassword == 'agent007'){
        // redirect to account page
        window.location.href = 'account.html';
    }
})
