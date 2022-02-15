var myInput = document.getElementById("psw");
var myInput2 = document.getElementById("psw2");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var specialDigit = document.getElementById("specialDigit");

document.getElementById("message").style.display = 'none';

document.getElementById("passwordComparision").style.display = 'none';


 function checkValidation() {
    document.getElementById("message").style.display = 'block';
    document.getElementById("passwordComparision").style.display = 'block';
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) { 
    letter.style.display = 'none';
  } else {
    letter.style.display = 'block';
  }
  
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.style.display = 'none';
  } else {
    capital.style.display = 'block';
  }

  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.style.display = 'none';
  } else {
    number.style.display = 'block';
  }
  
  var specialDigits = /[!@#$%^&*]/g;
  if(myInput.value.match(specialDigits)) {  
    specialDigit.style.display = 'none';
  } else {
    specialDigit.style.display = 'block';
  }

  if(myInput.value.length >= 8) {
    length.style.display = 'none';
  } else {
    length.style.display = 'block';
  }
}

function checkIfPasswordsEquals() {
	 if(myInput2.value === myInput.value) {
  document.getElementById("passwordComparision").style.display = 'none';
  } 
}
