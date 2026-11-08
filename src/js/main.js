let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
let password1 = document.getElementById('password1');
let password2 = document.getElementById('password2');
let passwordLength = document.getElementById('length');
let includeNumbers = document.getElementById('numbers');
let includeSymbols = document.getElementById('symbols');

function generatePassword() {
    if(passwordLength.value < 1) {
        alert('Please enter a valid password length.');
        return;
    }
    
    password1.textContent = '';
    password2.textContent = '';

    for (let i = 0; i < passwordLength.value ; i++) {
        if(!includeNumbers.checked && !includeSymbols.checked) {
            password1.textContent += letters[Math.floor(Math.random() * letters.length)];
            password2.textContent += letters[Math.floor(Math.random() * letters.length)];
        }
        

        if(includeNumbers.checked && !includeSymbols.checked) {
            let randomCharacter = Math.floor(Math.random() * 2);
            if (randomCharacter === 0) {
                password1.textContent += letters[Math.floor(Math.random() * letters.length)];
                password2.textContent += letters[Math.floor(Math.random() * letters.length)];
            }
            else if (randomCharacter === 1) {
                password1.textContent += numbers[Math.floor(Math.random() * numbers.length)];
                password2.textContent += numbers[Math.floor(Math.random() * numbers.length)];
        }
            }

            if(!includeNumbers.checked && includeSymbols.checked) {
            let randomCharacter = Math.floor(Math.random() * 2);
            if (randomCharacter === 0) {
                password1.textContent += letters[Math.floor(Math.random() * letters.length)];
                password2.textContent += letters[Math.floor(Math.random() * letters.length)];
            }
            else if (randomCharacter === 1) {
                password1.textContent += symbols[Math.floor(Math.random() * symbols.length)];
                password2.textContent += symbols[Math.floor(Math.random() * symbols.length)];
        }
            }

        if(includeNumbers.checked && includeSymbols.checked) {
        let randomCharacter = Math.floor(Math.random() * 3);
        if (randomCharacter === 0) {
            password1.textContent += letters[Math.floor(Math.random() * letters.length)];
            password2.textContent += letters[Math.floor(Math.random() * letters.length)];
        } else if (randomCharacter === 1 && includeNumbers.checked) {
            password1.textContent += numbers[Math.floor(Math.random() * numbers.length)];
            password2.textContent += numbers[Math.floor(Math.random() * numbers.length)];
        } else if (randomCharacter === 2 && includeSymbols.checked) {
            password1.textContent += symbols[Math.floor(Math.random() * symbols.length)];
            password2.textContent += symbols[Math.floor(Math.random() * symbols.length)];
        }
    }
    console.log(password1);
    console.log(password2);
}
}
    
