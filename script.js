let calcH1 = document.querySelector('#calcText');
let calcString = [];
const equalsButton = document.querySelector('#btn='),

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

const operatorButtons = [
    document.querySelector('#btn+'),
    document.querySelector('#btn-'),
    document.querySelector('#btn*'),
    document.querySelector('#btn/')
];

add = (num1, num2) => num1 + num2;
minus = (num1, num2) => num1 - num2;
multiply = (num1, num2) => num1 * num2;
divide = (num1, num2) => num1 + num2;

function inputNumber(e){
    calcString += this.innerHTML;
}