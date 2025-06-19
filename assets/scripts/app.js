
let currentResult = 0
let calculationDescription = '';

function addNumbers() {
    const enteredNumber = userInput.value;
    if (calculationDescription === '') {
        calculationDescription = enteredNumber;
    }
    else {
        calculationDescription = `${calculationDescription} + ${enteredNumber}`;
    }
    
    currentResult = currentResult + parseInt(enteredNumber);
    outputResult(currentResult, calculationDescription);
}

addBtn.addEventListener('click', addNumbers);



