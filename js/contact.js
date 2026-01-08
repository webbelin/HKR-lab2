const form = document.getElementById('contactForm');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const subjectsList = document.getElementById('subjectsList');
const message = document.getElementById('message');

/* Regex */
const onlyLettersRegex = /^[A-Za-z]+$/;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

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

    validateName();
    validateEmail();
    validateMessage();

    if(validateName() && validateEmail() && validateMessage()
    ){

        document.getElementById('noSuccessMessage').innerText = '';

        // Success message
        document.getElementById('successMessage').innerText = `Thank you ${firstName.value}! I will contact you soon!`;

        setTimeout(function(){
            document.getElementById('successMessage').innerText = '';
        }, 3000); 

        clearForm();

    } else {
        document.getElementById('noSuccessMessage').innerText = 'Check all fields';
    }
});


/* ******************************* FUNCTIONS ******************************* */

function validateName(){

    if(onlyLettersRegex.test(firstName.value)){
        firstName.classList.add('valid');
        firstName.classList.remove('invalid');        
        clearError(firstName.id, '');
        return true;    
    } else {
        firstName.classList.add('invalid');
        firstName.classList.remove('valid');        
        showError(firstName.id,'The name contains incorrect characters.');
        return false;   
    }

}  

function validateEmail(){



    if(emailRegex.test(email.value)){
        email.classList.add('valid');
        email.classList.remove('invalid');
        clearError(email.id, '');
        return true;
    } else {
        email.classList.add('invalid');
        email.classList.remove('valid');
        showError(email.id,'Check that the email is correct.');
        return false;
    }

}   

function validateMessage(){

    if(message.value.length >= 20){
        message.classList.add('valid');
        message.classList.remove('invalid');
        clearError(message.id, '');
        return true;
    } else {
        message.classList.add('invalid');
        message.classList.remove('valid');
        showError(message.id, 'The message must contain at least 20 characters.');
        return false;
    }

}

function showError(id, string){
    const errorMessage = document.getElementById(`${id}-error`)
    errorMessage.classList.add('visible');
    errorMessage.innerText = string;
}

function clearError(id, string){
const errorMessage = document.getElementById(`${id}-error`)
    errorMessage.classList.remove('visible');
    errorMessage.innerText = string;
}

function clearForm(){
    document.getElementById('contactForm').reset();
}