let calcH1 = document.querySelector('#calcText');
let calcString = [];
let clearButton = document.querySelector('#btnClear');
let backSpaceButton = document.querySelector('#btnBackspace');
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
    document.querySelector('#btn9'),
    document.querySelector('#btnDecimal')
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

add = (num1, num2) => Number(num1) + Number(num2);
minus = (num1, num2) => Number(num1) - Number(num2);
multiply = (num1, num2) => Number(num1) * Number(num2);
divide = (num1, num2) => Number(num1) / Number(num2);

function inputNumber() {
    let buttonContent = this.textContent;

    //Stops first entry being operator
    if (calcString.length < 1 && isOperator(buttonContent) == true) {
        return;
    }

    //If button pressed is an Operator AND so is the last in the Array
    if (isOperator(buttonContent) == true && isOperator(calcString[calcString.length - 1]) == true) {
        //Changes operator via pop
        calcString.pop();
        calcString.push(buttonContent);
    } else if (isOperator(buttonContent) == true) {
        //Add operator to new array item
        calcString.push(buttonContent);
    } else if (isDecimal(buttonContent)) {
        if(isOperator(calcString[calcString.length - 1]) || calcString.length == 0 || calcString[calcString.length - 1].includes('.')){
            return;
        } else{
            calcString[calcString.length - 1] = calcString[calcString.length - 1] + buttonContent;
        }
    } else {
        if (calcString.length == 0) {
            calcString[0] = buttonContent;
        } else {
            //Checks if current array entry is a operator or number
            if (isOperator(calcString[calcString.length - 1]) == true) {
                //If it is an operator, create new array item
                calcString.push(buttonContent);
            } else {
                //if not then to existing array item
                calcString[calcString.length - 1] = calcString[calcString.length - 1] + buttonContent;
            }
        }
    }
    //Update display header
    calcH1.textContent = calcString.join('');
}

function isOperator(clickedButton) {
    if (clickedButton == '+' || clickedButton == '-' || clickedButton == '??' || clickedButton == 'x') {
        return true;
    } else {
        return false;
    }
}

function isDecimal(clickedButton) {
    if (clickedButton == '.') {
        return true;
    } else {
        return false;
    }
}

clearButton.addEventListener('click', function() {
    calcString = [];
    calcH1.textContent = '0';
});

backSpaceButton.addEventListener('click', function() {
    console.log('hello');
    if (isOperator(calcString[calcString.length - 1]) == true) {
        calcString.pop();
    } else if (typeof calcString[calcString.length - 1] == 'string') {
        let original = calcString[calcString.length - 1];
        calcString[calcString.length - 1] = original.substring(0, (original.length - 1));
    }
    //Update display header
    if (calcString[0] == '') {
        calcH1.textContent = '0';
    } else {
        calcH1.textContent = calcString.join('');
    }
});

equalsButton.addEventListener('click', function() {

    if (calcString.length < 3) {
        return;
    }

    let result;
    let num1 = calcString.shift();;
    let operator = calcString.shift();;
    let num2 = calcString.shift();;

    if (isOperator(calcString[calcString.length - 1]) == true) {
        calcString.pop();
    }

    //Shortens array with each loop
    //So long as there is an operator it will continue to loop
    while (isOperator(operator)) {
        if (operator == '+') {
            result = add(num1, num2);
        } else if (operator == '-') {
            result = minus(num1, num2);
        } else if (operator == 'x') {
            result = multiply(num1, num2);
        } else if (operator == '??') {
            if (num2 == 0) {
                //Stops if divided by 0
                calcH1.textContent = 'No Dividing by 0!'
                return;
            }
            result = divide(num1, num2);
        } else {
            //(Bug catching)
            console.log('ERROR: OPERATOR NOT FOUND')
        }
        num1 = result;
        operator = calcString.shift();
        num2 = calcString.shift();
    }

    calcH1.textContent = result.toFixed(2);
})