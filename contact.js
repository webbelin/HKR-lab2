const form = document.getElementById('contactForm');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const subjectsList = document.getElementById('subjectsList');
const message = document.getElementById('message');

/* Regex */
const onlyLettersRegex = /^[A-Za-z]+$/;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

/* Message character counter */
message.addEventListener('keyup', function(){
    let counter = this.value.length;
    document.getElementById('counterText').textContent = counter + ' / 20 characters';
    document.getElementById('counterText').classList.remove('color-change');

    if(counter >= 20){
        document.getElementById('counterText').classList.add('color-change');
    }
});

/* Submit form */
form.addEventListener('submit', function(event){
    event.preventDefault();

    if(validateName() && validateEmail() && validateMessage()){

        document.getElementById('noSuccessMessage').innerText = '';

        // Success message
        document.getElementById('successMessage').innerText = `Thank you ${firstName.value}! I will contact you soon!`;

        setTimeout(function(){
            document.getElementById('successMessage').innerText = '';
        }, 3000); 

        clearForm();

    } else {
        console.log('false');
        document.getElementById('noSuccessMessage').innerText = 'Check all fields';
    }
});


/* ******************************* FUNCTIONS ******************************* */

function validateName(){
    if(onlyLettersRegex.test(firstName.value)){
        firstName.classList.add('valid');
        firstName.classList.remove('error');
        const text = '';
        showError(text);
        console.log('Valid name');
        return true;
    } else {
        firstName.classList.add('error');
        firstName.classList.remove('valid');
        const text = 'The name contains incorrect characters.';
        showError(text);
        console.log('Invalid name');
        return false;
    }    
}   

function validateEmail(){
 if(emailRegex.test(email.value)){
        email.classList.add('valid');
        email.classList.remove('error');
        return true;
    } else {
        email.classList.add('error');
        email.classList.remove('valid');
        const text = 'Check that the email is correct.';
        showError(text);
        return false;
    }
}   

function validateMessage(){
    if(message.value.length >= 20){
        message.classList.add('valid');
        message.classList.remove('error');
        console.log('Valid message');
        return true;
    } else {
        message.classList.add('error');
        message.classList.remove('valid');
        const text = 'The message must contain at least 20 characters.';
        showError(text);
        console.log('Invalid message');
        return false;
    }
}

function showError(text){
    const errorMessage = document.querySelector('.errorMessage');
    errorMessage.classList.add('visible');
    errorMessage.innerText = text;
    //console.log('showError: ', text);
}

function clearForm(){
    document.getElementById('contactForm').reset();
}