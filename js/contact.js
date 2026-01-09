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
console.log('Before functions are run')
    validateName();
    validateEmail();
    validateMessage();
console.log('After functions are run')
    if(validateName() && validateEmail() && validateMessage()){
console.log('If all are true')
        document.getElementById('noSuccessMessage').innerText = '';

        // Success message
        document.getElementById('successMessage').innerText = `Thank you ${firstName.value}! I will contact you soon!`;

        setTimeout(function(){
            document.getElementById('successMessage').innerText = '';
        }, 3000); 

        clearForm();

    } else {
        console.log('If its still false')
        document.getElementById('noSuccessMessage').innerText = 'Check all fields';
    }
});


/* ******************************* FUNCTIONS ******************************* */

function validateName(){

    let checkFirstName = false;
    let checkLastName = false;

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

    if(checkFirstName && checkLastName){
        console.log('Validate name is true');
        return true;
    }

}  

function validateEmail(){

    if(emailRegex.test(email.value)){
        email.classList.add('valid');
        email.classList.remove('invalid');
        clearError(email.id, '');
                console.log('Validate email is true');
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
                console.log('Validate message is true');
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