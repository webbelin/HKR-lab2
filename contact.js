const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const subjectsList = document.getElementById('subjectsList');
const message = document.getElementById('message');

const onlyLettersRegex = /^[A-Za-z]+$/;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

/* Validate fields */
function validateName(){
    if(onlyLettersRegex.test(firstName.value)){
        console.log('Bra');
    } else {
        console.log('Dåligt')
    }
}   

function validateEmail(){
    if(emailRegex.test(email.value)){
        console.log('Bra');
    } else {
        console.log('Dåligt')
    }
}   

function validateMessage(){
    if(message.value.length > 3){
        console.log('Godkänt medd')
    } else {
        console.log('ej godkänt')
        const text = 'textmeddelande';
        showError(text)
    }
}

function showError(text){
    console.log('Här är: ', text);
}

function clearError(){

}

function clearForm(){
    document.getElementById('contactForm').reset();
}