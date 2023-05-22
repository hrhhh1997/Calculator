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
const equalBtn = document.querySelector('[data-equal]');
const topScreen = document.querySelector('[data-chain-display]');
const bottomScreen = document.querySelector('[data-current-display]');

numbers.forEach(number => {
    number.addEventListener('click', () => {
        
    })
})

function appendNumber()