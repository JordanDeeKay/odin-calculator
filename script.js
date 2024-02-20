let firstNum = null;
let secondNum = null;
let operator = null;
let displayValue = '';
let displayValueArray = [];

const zeroButton = document.getElementById('zeroButton');
const oneButton = document.getElementById('oneButton');
const twoButton = document.getElementById('twoButton');
const threeButton = document.getElementById('threeButton');
const fourButton = document.getElementById('fourButton');
const fiveButton = document.getElementById('fiveButton');
const sixButton = document.getElementById('sixButton');
const sevenButton = document.getElementById('sevenButton');
const eightButton = document.getElementById('eightButton');
const nineButton = document.getElementById('nineButton');
const addButton = document.getElementById('addButton');
const subtractButton = document.getElementById('subtractButton');
const multiplyButton = document.getElementById('multiplyButton');
const divideButton = document.getElementById('divideButton');
const clearButton = document.getElementById('clearButton');
const equalsButton = document.getElementById('equalsButton');

zeroButton.addEventListener('click', () => {
    populateDisplay('0');
});

oneButton.addEventListener('click', () => {
    populateDisplay('1');
});

twoButton.addEventListener('click', () => {
    populateDisplay('2');
});

threeButton.addEventListener('click', () => {
    populateDisplay('3');
});

fourButton.addEventListener('click', () => {
    populateDisplay('4');
});

fiveButton.addEventListener('click', () => {
    populateDisplay('5');
});

sixButton.addEventListener('click', () => {
    populateDisplay('6');
});

sevenButton.addEventListener('click', () => {
    populateDisplay('7');
});

eightButton.addEventListener('click', () => {
    populateDisplay('8');
});

nineButton.addEventListener('click', () => {
    populateDisplay('9');
});

addButton.addEventListener('click', () => {
    operator = '+';
    populateDisplay(' + ');
});

subtractButton.addEventListener('click', () => {
    operator = '-';
    populateDisplay(' - ');
});

multiplyButton.addEventListener('click', () => {
    operator = '*';
    populateDisplay(' * ');
});

divideButton.addEventListener('click', () => {
    operator = '/';
    populateDisplay(' / ');
});

equalsButton.addEventListener('click', () => {
    operate(firstNum, secondNum, operator);
    console.log(firstNum, secondNum, operator);
});

clearButton.addEventListener('click', () => {
    displayValue = ''
    document.getElementById('display').textContent = '';
});

const add = function(num1, num2) {
    return num1 + num2;
}

const subtract = function(num1, num2) {
    return num1 - num2;
}

const multiply = function(num1, num2) {
    return num1 * num2;
}

const divide = function(num1, num2) {
    if (num2 === 0) {
        alert("You cannot divide by 0!")
    } else {
        return num1 / num2;
    }
}

const operate = function(num1, num2, operator) {
    displayValueArray = displayValue.split(' ');
    if (operator === '+') {
        firstNum = parseInt(displayValueArray[displayValueArray.length - 3]) + parseInt(displayValueArray[displayValueArray.length - 1]);
        secondNum = null;
        displayValue = firstNum.toString();
        document.getElementById('display').textContent = displayValue;
    } else if (operator === '-') {
        firstNum = parseInt(displayValueArray[displayValueArray.length - 3]) - parseInt(displayValueArray[displayValueArray.length - 1]);
        secondNum = null;
        displayValue = firstNum.toString();
        document.getElementById('display').textContent = displayValue;
    } else if (operator === '*') {
        firstNum = parseInt(displayValueArray[displayValueArray.length - 3]) * parseInt(displayValueArray[displayValueArray.length - 1]);
        secondNum = null;
        displayValue = firstNum.toString();
        document.getElementById('display').textContent = displayValue;
    } else if (operator === '/') {
        firstNum = parseInt(displayValueArray[displayValueArray.length - 3]) / parseInt(displayValueArray[displayValueArray.length - 1]);
        secondNum = null;
        displayValue = firstNum.toString();
        document.getElementById('display').textContent = displayValue;
    }
}

const populateDisplay = function(input) {
    displayValue = document.getElementById('display').textContent + input;
    document.getElementById('display').textContent = displayValue;
}