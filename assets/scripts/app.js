
let currentResult = 0
let calculationDescription = '';

function addNumbers() {
    if (calculationDescription === '') {
        calculationDescription = userInput.value;
    }
    else {
        calculationDescription = `${calculationDescription} + ${userInput.value}`;
    }
    
    currentResult = currentResult + parseInt(userInput.value);
    outputResult(currentResult, calculationDescription);
}

addBtn.addEventListener('click', addNumbers);



