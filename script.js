let firstNum = null;
let secondNum = null;
let operator = null;
let displayValue = '';

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
    if (!(operator === null)) {
        document.getElementById('display').textContent = '';
    }
    populateDisplay('0');
    secondNum = parseInt(displayValue);
});

oneButton.addEventListener('click', () => {
    if (!(operator === null)) {
        document.getElementById('display').textContent = '';
    }
    populateDisplay('1');
    secondNum = parseInt(displayValue);
});

twoButton.addEventListener('click', () => {
    if (!(operator === null)) {
        document.getElementById('display').textContent = '';
    }
    populateDisplay('2');
    secondNum = parseInt(displayValue);
});

threeButton.addEventListener('click', () => {
    if (!(operator === null)) {
        document.getElementById('display').textContent = '';
    }
    populateDisplay('3');
    secondNum = parseInt(displayValue);
});

fourButton.addEventListener('click', () => {
    if (!(operator === null)) {
        document.getElementById('display').textContent = '';
    }
    populateDisplay('4');
    secondNum = parseInt(displayValue);
});

fiveButton.addEventListener('click', () => {
    if (!(operator === null)) {
        document.getElementById('display').textContent = '';
    }
    populateDisplay('5');
    secondNum = parseInt(displayValue);
});

sixButton.addEventListener('click', () => {
    if (!(operator === null)) {
        document.getElementById('display').textContent = '';
    }
    populateDisplay('6');
    secondNum = parseInt(displayValue);
});

sevenButton.addEventListener('click', () => {
    if (!(operator === null)) {
        document.getElementById('display').textContent = '';
    }
    populateDisplay('7');
    secondNum = parseInt(displayValue);
});

eightButton.addEventListener('click', () => {
    if (!(operator === null)) {
        document.getElementById('display').textContent = '';
    }
    populateDisplay('8');
    secondNum = parseInt(displayValue);
});

nineButton.addEventListener('click', () => {
    if (!(operator === null)) {
        document.getElementById('display').textContent = '';
    }
    populateDisplay('9');
    secondNum = parseInt(displayValue);
});

addButton.addEventListener('click', () => {
    operator = '+';

    if (firstNum === null) {
        firstNum = parseInt(displayValue);
    } else {
        secondNum = parseInt(displayValue);
    }

    displayValue = '';
});

subtractButton.addEventListener('click', () => {
    operator = '-';

    if (firstNum === null) {
        firstNum = parseInt(displayValue);
    } else {
        secondNum = parseInt(displayValue);
    }

    displayValue = '';
});

multiplyButton.addEventListener('click', () => {
    operator = '*';

    if (firstNum === null) {
        firstNum = parseInt(displayValue);
    } else {
        secondNum = parseInt(displayValue);
    }

    displayValue = '';
});

divideButton.addEventListener('click', () => {
    operator = '/';

    if (firstNum === null) {
        firstNum = parseInt(displayValue);
    } else {
        secondNum = parseInt(displayValue);
    }

    displayValue = '';
});

equalsButton.addEventListener('click', () => {
    console.log(firstNum, secondNum, operator);
    operate(firstNum, secondNum, operator);
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
    if (operator === '+') {
        firstNum = num1 + num2;
        secondNum = null;
        displayValue = firstNum.toString();
        document.getElementById('display').textContent = displayValue;
    } else if (operator === '-') {
        firstNum = num1 - num2;
        secondNum = null;
        displayValue = firstNum.toString();
        document.getElementById('display').textContent = displayValue;
    } else if (operator === '*') {
        firstNum = num1 * num2;
        secondNum = null;
        displayValue = firstNum.toString();
        document.getElementById('display').textContent = displayValue;
    } else if (operator === '/') {
        firstNum = num1 / num2;
        secondNum = null;
        displayValue = firstNum.toString();
        document.getElementById('display').textContent = displayValue;
    }
}

const populateDisplay = function(input) {
    displayValue = document.getElementById('display').textContent + input;
    document.getElementById('display').textContent = displayValue;
}