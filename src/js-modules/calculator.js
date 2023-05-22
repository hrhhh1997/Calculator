function add (valOne, valTwo) {
    return valOne + valTwo;
}

function subtract (valOne, valTwo) {
    return valOne - valTwo;
}

function multiply (valOne, valTwo) {
    return valOne * valTwo;
}

function divide (valOne, valTwo) {
    return valOne / valTwo;
}

function calculate (operator, valOne, valTwo) {
    valOne = Number(valOne);
    valTwo = Number(valTwo);

    switch(operator) {
        case '+':
            return add(valOne, valTwo);
        case '-':
            return subtract(valOne, valTwo);
        case '÷':
            return (valTwo === 0) ? null : divide(valOne, valTwo);
        case 'x':
            return multiply(valOne, valTwo);
        default:
            return null;
    }
}

module.exports = {
    calculate
}