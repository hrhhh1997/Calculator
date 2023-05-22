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
const decimalBtn = document.querySelector('[data-point]');
const equalBtn = document.querySelector('[data-equal]');
const topScreen = document.querySelector('[data-chain-display]');
const bottomScreen = document.querySelector('[data-current-display]');

window.addEventListener('keydown', handleKeyboardInput);
// powerBtn.addEventListener('click', powerOnOff);
clearAllBtn.addEventListener('click', clearEverything);
clearBtn.addEventListener('click', clearNumber);
decimalBtn.addEventListener('click', appendDecimalIndicator);
equalBtn.addEventListener('click', evaluate);

numbers.forEach(number => {
    number.addEventListener('click', () => appendNumber(number.textContent));
});

operators.forEach(operator => {
    operator.addEventListener('click', () => setOperation(operator.textContent));
});

function screenReset() {
    bottomScreen.textContent = '';
    resetScreen = false;
}

function appendNumber(number) {
    if (bottomScreen.textContent === '0' || resetScreen)
        screenReset();
    bottomScreen.textContent += number;
}

function appendDecimalIndicator() {
    if (resetScreen) screenReset();
    if (bottomScreen.textContent === '') 
        bottomScreen.textContent = '0';
    if (bottomScreen.textContent.includes('.'))
        return bottomScreen.textContent += '.';
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
    if (currentOperation !== null)  evaluate();
    firstOperand = bottomScreen.textContent
    currentOperation = operator;
    topScreen.textContent = `${firstOperand} ${currentOperation}`;
    resetScreen = true;
}

function evaluate() {
    if (currentOperation === null || resetScreen) return;
    if (currentOperation === '÷' && bottomScreen.textContent === 0) {
        alert('Undefined! Division by 0');
        return;
    }
    secondOperand = bottomScreen.textContent;
    bottomScreen.textContent = roundResult(calculate(currentOperation, firstOperand, secondOperand));
    topScreen.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`;
    currentOperation = null;
}

function roundResult(number) {
    return Math.round(number * 1000) / 1000;
}

function handleKeyboardInput(e) {
    if (e.key >= 0 && e.key <= 9) {
        appendNumber(e.key);
    };
    if (e.key === '.') { 
        appendDecimalIndicator();
    };
    if (e.key === '=' || e.key === 'Enter') { 
        evaluate();
    };
    if (e.key === 'Backspace') {
        clearNumber(); 
    }
    if (e.key === 'Escape') { 
        clearEverything();
    }
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        setOperation(convertOperator(e.key));
    };
      
    function convertOperator(keyboardOperator) {
        if (keyboardOperator === '/') return '÷'
        if (keyboardOperator === '*') return 'x'
        if (keyboardOperator === '-') return '-'
        if (keyboardOperator === '+') return '+'
      }
}