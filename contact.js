const form = document.getElementById('contactForm');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const subjectsList = document.getElementById('subjectsList');
const message = document.getElementById('message');

/* Message character counter */
message.addEventListener('keyup', function(){
    let counter = this.value.length;
    document.getElementById('counterText').textContent = counter + ' / 20 characters';

    if(counter >= 20){
        document.getElementById('counterText').classList.add('color-change');
    }
});

/* Submit */
form.addEventListener('submit', function(event){
    event.preventDefault();

    //validateName();
    validateEmail();
    //validateMessage();

    // Success message
    document.getElementById('successMessage').innerText = `Thank you ${firstName.value}! I will contact you soon!`;

    setTimeout(function(){
        document.getElementById('successMessage').innerText = '';
    }, 3000); 
});

const onlyLettersRegex = /^[A-Za-z]+$/;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

/* Validate fields */
function validateName(){
    if(onlyLettersRegex.test(firstName.value)){
        console.log('Bra');
        firstName.classList.add('valid');
    } else {
        const text = 'The name contains incorrect characters.';
        firstName.classList.add('error');
        showError(text);
    }
}   

function validateEmail(){
 if(emailRegex.test(email.value)){
        email.classList.add('valid');
        email.classList.remove('error');
    } else {
        console.log('hej')
        email.classList.add('error');
        email.classList.remove('valid');
        const text = 'Check that the email is correct.';
        showError(text);
    }
    console.log('validate Emeil')
}   

function validateMessage(){
    if(message.value.length >= 20){
        message.classList.add('valid');
    } else {
        message.classList.add('error');
        const text = 'The message must contain at least 20 characters.';
        showError(text);
    }
}

function showError(text){
    const errorMessage = document.querySelector('.errorMessage');
    errorMessage.innerText = text;
    //console.log('showError: ', text);
}

function clearForm(){
    document.getElementById('contactForm').reset();
}