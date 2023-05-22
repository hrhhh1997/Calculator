import './css/style.css';
import { calculate } from './js-modules/calculator';

let firstOperand = '';
let secondOperand = '';
let currentOperation = null;
let resetScreen = false;

const numbers = document.querySelectorAll('[data-number]');
const operators = document.querySelectorAll('[data-operation]');
const powerBtn = document.querySelector('[data-onOff]');
const clearBtn = document.querySelector('[data-clear]');
const clearAllBtn = document.querySelector('[data-clearEverything]');
const decimalBtn = document.querySelector('[data-point');
const equalBtn = document.querySelector('[data-equal]');
const topScreen = document.querySelector('[data-chain-display]');
const bottomScreen = document.querySelector('[data-current-display]');

powerBtn.addEventListener('click', powerOnOff);
clearAllBtn.addEventListener('click', clearEverything);
clearBtn.addEventListener('click', clearNumber);
decimalBtn.addEventListener('click', appendDecimalIndicator);
equalBtn.addEventListener('click', evaluate);

numbers.forEach(number => {
    number.addEventListener('click', )
});

operators.forEach(operator => {
    operator.addEventListener('click', );
});

function screenReset() {
    bottomScreen.textContent = '';
    resetScreen = false;
}

function appendNumber(number) {
    if (bottomScreen.textContent === 0 || resetScreen) {
        screenReset();
    }
    bottomScreen.textContent += number;
}

function appendDecimalIndicator() {
    if (resetScreen) {
        screenReset();
    }
    if (bottomScreen.textContent === '') {
        bottomScreen.textContent = '0';
    }
    if (bottomScreen.textContent.includes('.')){
        return bottomScreen.textContent += '.';
    }
}

function clearEverything() {
    bottomScreen.textContent = '0';
    topScreen.textContent = '';
    firstOperand = '';
    secondOperand = '';
    currentOperation = null;
}

function clearNumber() {
    bottomScreen.textContent = bottomScreen.textContent.toString().slice(0, -1);
}

function setOperation(operator) {
    if (currentOperation !== null) {
        evaluate();
    }
    firstOperand = bottomScreen.textContent
    currentOperation = operator;
    topScreen.textContent = `${firstOperand} ${currentOperation}`;
    resetScreen = true;
}

function evaluate() {
    if (currentOperation === null || resetScreen) {
        return;
    }
}