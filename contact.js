const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const subjectsList = document.getElementById('subjectsList');
const message = document.getElementById('message');
const form = document.getElementById('contactForm');

/* Message counter */
message.addEventListener('keyup', function(){
    let counter = this.value.length;
    document.getElementById('counterText').textContent = counter;

    if(counter >= 20){
            document.getElementById('counterText').classList.add('aaa');

        validateMessage();
    }
});

/* Submit */
form.addEventListener('submit', function(event){
    event.preventDefault();

    validateName();
   // validateEmail();
   // validateMessage();
})



const onlyLettersRegex = /^[A-Za-z]+$/;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

/* Validate fields */
function validateName(){
    if(onlyLettersRegex.test(firstName.value)){
        console.log('Bra');
    } else {
        const text = 'Kontrollera att namnet är rättstavat.';
        console.log(text);
        showError(text);
    }
}   

function validateEmail(){
    if(emailRegex.test(email.value)){
        console.log('Bra');
    } else {
        const text = 'Kontrollera email..';
        console.log(text);
        showError(text);
    }
}   

function validateMessage(){
    if(message.value.length > 3){
        console.log('Godkänt medd')
    } else {
        const text = 'Meddelandet måste innehålla minst 20 tecken.';
         console.log(text);
        showError(text);
    }
}

function showError(text){
    const errorMessage = document.getElementsByClassName('errorMessage');
    return errorMessage.innerText = text;
}

function clearForm(){
    document.getElementById('contactForm').reset();
}