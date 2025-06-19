
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

addBtn.addEventListener('click', addNumbers);



