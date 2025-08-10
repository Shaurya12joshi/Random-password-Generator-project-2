    let includeLowerCase = false;
    let includeUpperCase = false;
    let includeNumbers = false;
    let includeSymbols = false;

function isLowerCase(){
    includeLowerCase = !includeLowerCase;
}
function isUpperCase(){
    includeUpperCase = !includeUpperCase;
}
function isNumbers(){
    includeNumbers = !includeNumbers;
}
function isSymbols(){
    includeSymbols = !includeSymbols;
}

function generatePassword(passwordLength){
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolsChars = "@#$&";
   
    
    

    let allowedChars = "";
    let password = "";
    allowedChars += includeLowerCase ? lowerCaseChars : "";
    allowedChars += includeUpperCase ? upperCaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolsChars : "";

    for(let i = 0 ; i<passwordLength; i++){
        const randomPassword = Math.floor(Math.random()*allowedChars.length)
        password += allowedChars[randomPassword];

    }
    return password;
   

}

function handleGenerate(){
    passwordLength =  (document.getElementById("characters").value);
    const password = generatePassword(passwordLength);
document.getElementById("generatedPassword").innerText = `Generated Password: ${password}`;
}








