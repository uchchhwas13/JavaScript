
let currentResult = 0
let calculationDescription = '';

function addNumbers() {
    const enteredNumber = parseInt(userInput.value);
    currentResult = currentResult + enteredNumber;
    createAndWriteOutput('+', enteredNumber);
}

function createAndWriteOutput(operator, enteredNumber) {
    if (calculationDescription === '') {
        calculationDescription = enteredNumber;
    }
    else {
        calculationDescription = `${calculationDescription} ${operator} ${enteredNumber}`;
    }
    outputResult(currentResult, calculationDescription);
}

function subtractNumbers() {
    const enteredNumber = parseInt(userInput.value);
    currentResult = currentResult - enteredNumber;
    createAndWriteOutput('-', enteredNumber);
}

function multiplyNumbers() {
    const enteredNumber = parseInt(userInput.value);
    currentResult = currentResult * enteredNumber;
    createAndWriteOutput('*', enteredNumber);
}

function divideNumbers() {
    const enteredNumber = parseInt(userInput.value);
    if (enteredNumber === 0) {
        alert('Cannot divide by zero!');
        return;
    }
    currentResult = currentResult / enteredNumber;
    createAndWriteOutput('/', enteredNumber);
}

addBtn.addEventListener('click', addNumbers);
subtractBtn.addEventListener('click', subtractNumbers);
multiplyBtn.addEventListener('click', multiplyNumbers);
divideBtn.addEventListener('click', divideNumbers);



