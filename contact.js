const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const subjectsList = document.getElementById('subjectsList');
const message = document.getElementById('message');

/* Message counter */
message.addEventListener('keyup', function(){
    let counter = this.value.length;
    document.getElementById('counterText').textContent = counter;

    if(counter == 20){
        validateMessage();
    }
});

const onlyLettersRegex = /^[A-Za-z]+$/;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

/* Validate fields */
function validateName(){
    if(onlyLettersRegex.test(firstName.value)){
        console.log('Bra');
    } else {
        const text = 'Kontrollera att namnet är rättstavat.';
        showError(text);
    }
}   

function validateEmail(){
    if(emailRegex.test(email.value)){
        console.log('Bra');
    } else {
        const text = 'Kontrollera email..';
        showError(text);
    }
}   

function validateMessage(){
    if(message.value.length > 3){
        console.log('Godkänt medd')
    } else {
        const text = 'Meddelandet måste innehålla minst 20 tecken.';
        showError(text);
    }
}

function showError(text){
    const errorMessage = document.getElementsByClassName('errorMessage');
    errorMessage.innerText = text;
}

function clearForm(){
    document.getElementById('contactForm').reset();
}