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
message.addEventListener('input', function(){

    let counter = this.value.length;
    const counterText = document.getElementById('counterText');

    counterText.textContent = counter + ' / 20 characters';
    counterText.classList.remove('color-change');

    if(counter >= 20){
        counterText.classList.add('color-change');
    }
});

/* Submit form */
form.addEventListener('submit', function(event){

    event.preventDefault();

    const success = document.getElementById('successMessage');
    const noSuccess = document.getElementById('noSuccessMessage');

    validateName();
    validateEmail();
    validateSubject();
    validateMessage();

    if(validateName() && validateEmail() && validateSubject() && validateMessage()){

        noSuccess.innerText = '';
        noSuccess.classList.remove('visible');

        // Success message
        success.innerText = `🎉 Thank you ${firstName.value}! I will contact you soon!`;
        
        /* Make success message dissapear */
        setTimeout(function(){
            success.innerText = '';
        }, 3000); 

        clearForm();

    } else {
        noSuccess.classList.add('visible');
        noSuccess.innerText = 'Check all fields';
    }
});


/* ******************************* FUNCTIONS ******************************* */

function validateName(){

    let checkFirstName = false;
    let checkLastName = false;

    /* Check first name input field */
    if(onlyLettersRegex.test(firstName.value)){
        firstName.classList.add('valid');
        firstName.classList.remove('invalid');        
        clearError(firstName.id, '');
        checkFirstName = true;
    } else {
        firstName.classList.add('invalid');
        firstName.classList.remove('valid');        
        showError(firstName.id,'First name contains incorrect characters.');
    }

    /* Check last name input field */
    if(onlyLettersRegex.test(lastName.value)){
        lastName.classList.add('valid');
        lastName.classList.remove('invalid');        
        clearError(lastName.id, '');
        checkLastName = true;
    } else {
        lastName.classList.add('invalid');
        lastName.classList.remove('valid');        
        showError(lastName.id,'Last name contains incorrect characters.');
    }

    /* Check if both input fields are valid */
    if(checkFirstName && checkLastName){
        return true;
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

function validateSubject(){
   
    if(subjectsList.value != ''){
        subjectsList.classList.add('valid');
        subjectsList.classList.remove('invalid');
        clearError(subjectsList.id, '');
        return true;
    } else {
        subjectsList.classList.add('invalid');
        subjectsList.classList.remove('valid');
        showError(subjectsList.id, 'Please choose a subject.');
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
    const errorMessage = document.getElementById(`${id}-error`);
    errorMessage.classList.remove('visible');
    
    // Remove text when faded out
    setTimeout(() => {
        errorMessage.innerText = string;
    }, 300); 

}

function clearForm(){
    form.reset();
}