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

for(let i =0;i < numButtons.length;i++){
    numButtons[i].addEventListener('click', inputNumber);
}

const operatorButtons = [
    document.querySelector('#btnPlus'),
    document.querySelector('#btnMinus'),
    document.querySelector('#btnMultiply'),
    document.querySelector('#btnDivide')
];

for(let i =0;i < operatorButtons.length;i++){
    operatorButtons[i].addEventListener('click', inputNumber);
}

add = (num1, num2) => num1 + num2;
minus = (num1, num2) => num1 - num2;
multiply = (num1, num2) => num1 * num2;
divide = (num1, num2) => num1 + num2;

function inputNumber(){
    calcString.push(this.textContent);
    calcH1.textContent = calcString.join('');
}

clearButton.addEventListener('click', function(){
    calcString = [];
    // calcH1.textContent = '0';
    calcH1.textContent = '0';
})