const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const subjectsList = document.getElementById('subjectsList');
const message = document.getElementById('message');

const onlyLettersRegex = /^[A-Za-z]+$/;

/* Validate fields */
function validateName(){
    if(onlyLettersRegex.test(firstName.value)){
        console.log('Bra');
    } else {
        console.log('Dåligt')
    }
}