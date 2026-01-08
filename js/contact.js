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

       // clearForm();

    } else {
        console.log('false');
        document.getElementById('noSuccessMessage').innerText = 'Check all fields';
    }
});


/* ******************************* FUNCTIONS ******************************* */

function validateName(){
    
    firstName.classList.toggle('valid');
    firstName.classList.toggle('error');   

    if(onlyLettersRegex.test(firstName.value)){
        clearError(firstName.id, '');
        return true;    
    } else {
        showError(firstName.id,'The name contains incorrect characters.');
        return false;   
    }

}  

function validateEmail(){

    email.classList.toggle('valid');
    email.classList.toggle('error');

    if(emailRegex.test(email.value)){
        clearError(email.id, '');
        return true;
    } else {
        showError(email.id,'Check that the email is correct.');
        return false;
    }

}   

function validateMessage(){

    message.classList.toggle('valid');
    message.classList.toggle('error');

    if(message.value.length >= 20){
        clearError(message.id, '');
        return true;
    } else {
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