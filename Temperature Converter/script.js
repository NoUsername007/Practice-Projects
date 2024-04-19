let inputBox = document.getElementById('input');
let output = document.getElementById('output');
let outputBox = document.getElementById('outputBox');
let submit = document.getElementById('submit');
let cToF = document.getElementById('c-to-f');
let fToC = document.getElementById('f-to-c');
let result;

submit.onclick = function (){
    let input = inputBox.value;
    outputBox.style.cssText = 'display: block'
    if (cToF.checked) {
        result = 9/5*input + 32;
        output.textContent = `The temperature in Fahrenheit will be ${result}.`;
    } else  if (fToC.checked) {
        result = (input - 32) * 5/9;
        output.textContent = `The temperature in Celsius will be ${result}.`;      
    } else if (input == null){
        output.textContent = `Please enter a valid value.`;
    } else {
        output.textContent = `Please select an option.`;
    }
}

console.log(input)