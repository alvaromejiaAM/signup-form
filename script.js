let password = document.querySelector('#user-password');
let confirm_password = document.querySelector('#confirm-password');

function validate(){
  if(password.value != confirm_password.value){
    confirm_password.setCustomValidity("Passwords Don't Match");
  }
  else{
    confirm_password.setCustomValidity(''); //Goes through
  }
}

password.onchange = validate;
confirm_password.onkeyup = validate;