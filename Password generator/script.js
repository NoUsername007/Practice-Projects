function password(passwordlength, includeLowercase, includeUppercase, includenumbers, includesymbols) {
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const number = '0123456789';
    const symbols = '!@#$%^&*()_+-='

    let allowedChars = '';
    let passwordGenerated = '';
    allowedChars += lowerCase ? lowerCase : '';
    allowedChars += upperCase ? upperCase : '';
    allowedChars += number ? number : '';
    allowedChars += symbols ? symbols : '';
    if (passwordLength <= 0){
        return '(Password length must be at least 1.)';
    }
    if (allowedChars.length == 0){
        return '(At least one type of character need to be selected.)'
    }
    
    for (let i = 0; i < passwordLength; i++) {
        const Random = Math.ceil(Math.random()*allowedChars.length);
        passwordGenerated += allowedChars[Random];
    }

    return passwordGenerated;
}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includenumbers = true;
const includesymbols = true;

const generatedPassword = password(passwordLength, includeLowercase, includeUppercase, includenumbers, includesymbols)

console.log(generatedPassword);