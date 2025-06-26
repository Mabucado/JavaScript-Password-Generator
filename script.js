const mySubmit = document.getElementById("mySubmit");
const capital = document.getElementById("Capital");
const special = document.getElementById("Special");
const number = document.getElementById("Number");
const passwordText = document.getElementById("password");
const noChar = document.getElementById("noChar");

mySubmit.onclick = function(){
let password ="";
let randomLetter;
let randomNumber;
const specialChars = "!@#$%^&*+-=;:<>?~";
let randomSpecialChar;
switch(true){
     case (number.checked && special.checked && capital.checked):
       for (let i = 0; i < 10; i++) {
    randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    randomNumber = Math.floor(Math.random() * 10);
    randomSpecialChar = specialChars[Math.floor(Math.random() * specialChars.length)]
    password+=randomLetter;
    password+=randomNumber;
    password+=randomSpecialChar;
}
    break;
     case (number.checked && capital.checked):
        for (let i = 0; i < 10; i++) {
    randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    randomNumber = Math.floor(Math.random() * 10);
    randomSpecialChar = specialChars[Math.floor(Math.random() * specialChars.length)]
    
    password+=randomNumber;
    password+=randomSpecialChar;
}
    break;
    case (special.checked && capital.checked):
        for (let i = 0; i < 10; i++) {
    randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    randomNumber = Math.floor(Math.random() * 10);
    randomSpecialChar = specialChars[Math.floor(Math.random() * specialChars.length)]
    password+=randomLetter;
    
    password+=randomSpecialChar;
}
    break;
    case (special.checked && number.checked):
        for (let i = 0; i < 10; i++) {
    randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    randomNumber = Math.floor(Math.random() * 10);
    randomSpecialChar = specialChars[Math.floor(Math.random() * specialChars.length)]
    password+=randomLetter;
    password+=randomNumber;

}
    break;
    case (capital.checked):
        for (let i = 0; i < 10; i++) {
    let code = 65 + Math.floor(Math.random() * 26); // A–Z
    let letter = String.fromCharCode(code);

    // Randomly convert to lowercase 50% of the time
    if (Math.random() < 0.5) {
        randomLetter = letter.toLowerCase();
    }  
    password+=randomLetter;
}
    break;
    case (special.checked):
        for (let i = 0; i < 10; i++) {
    
    randomSpecialChar = specialChars[Math.floor(Math.random() * specialChars.length)]
    password+=randomSpecialChar;
}
    break;
    case (number.checked):
        for (let i = 0; i < 10; i++) {
    randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    randomNumber = Math.floor(Math.random() * 10);
    randomSpecialChar = specialChars[Math.floor(Math.random() * specialChars.length)]
    password+=randomNumber;
}
    break;
   
   
}
    password= shuffleWord(password);
    passwordText.value="";
    passwordText.value = password.slice(0, noChar.value);
    console.log(password.slice(0, noChar.value));
    console.log(noChar.value);
}
function shuffleWord(word) {
    const array = word.split('');
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // swap
    }
    return array.join('');
}