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
        showError('');
        return true;    
    } else {
        showError('The name contains incorrect characters.');
        return false;   
    }

}  

function validateEmail(){

    email.classList.toggle('valid');
    email.classList.toggle('error');

    if(emailRegex.test(email.value)){
        showError('');
        return true;
    } else {
        showError('Check that the email is correct.');
        return false;
    }

}   

function validateMessage(){

    message.classList.toggle('valid');
    message.classList.toggle('error');

    if(message.value.length >= 20){
        showError('');
        return true;
    } else {
        showError('The message must contain at least 20 characters.');
        return false;
    }

}

function showError(text){
    const errorMessage = document.querySelector('.errorMessage');
    errorMessage.classList.add('visible');
    errorMessage.innerText = text;
    //console.log('showError: ', text);
    
  //  const place = document.getElementById(errorMessagePlace);
    //const newDiv = document.createElement("div");
    //newDiv.innerText = text;
    //place.after(newDiv.innerText = text);

}

function clearForm(){
    document.getElementById('contactForm').reset();
}