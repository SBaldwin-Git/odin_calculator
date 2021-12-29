let calcH1 = document.querySelector('#calcText');
let calcString = [];
let clearButton = document.querySelector('#btnClear');
let equalsButton = document.querySelector('#btnEquals');

const numButtons = [
    document.querySelector('#btn0'),
    document.querySelector('#btn1'),
    document.querySelector('#btn2'),
    document.querySelector('#btn3'),
    document.querySelector('#btn4'),
    document.querySelector('#btn5'),
    document.querySelector('#btn6'),
    document.querySelector('#btn7'),
    document.querySelector('#btn8'),
    document.querySelector('#btn9')
];

for (let i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener('click', inputNumber);
}

const operatorButtons = [
    document.querySelector('#btnPlus'),
    document.querySelector('#btnMinus'),
    document.querySelector('#btnMultiply'),
    document.querySelector('#btnDivide')
];

for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', inputNumber);
}

add = (num1, num2) => num1 + num2;
minus = (num1, num2) => num1 - num2;
multiply = (num1, num2) => num1 * num2;
divide = (num1, num2) => num1 + num2;

function inputNumber() {
    let buttonContent = this.textContent;

    if (calcString.length < 1 && isOperator(buttonContent) == true) {
        return;
    }

    //If button pressed is an Operator AND so is the last in the Array
    if (isOperator(buttonContent) == true && isOperator(calcString[calcString.length - 1]) == true) {
        calcString.pop();
        calcString.push(buttonContent);
    } else {
        calcString.push(buttonContent);
    }
    calcH1.textContent = calcString.join('');
}

function isOperator(clickedButton) {
    if (clickedButton == '+' || clickedButton == '-' || clickedButton == '/' || clickedButton == '*') {
        return true;
    } else {
        return false;
    }
}

clearButton.addEventListener('click', function() {
    calcString = [];
    calcH1.textContent = '0';
})