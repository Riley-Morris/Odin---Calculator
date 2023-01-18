
// Global variables initialize
let currentOperator = ''
let numberStorage = []
//Define operators within an Object to use later to shorten checks
const operatorFunctions = {
    '+': (a, b) => parseFloat(a) + parseFloat(b),
    '-': (a, b) =>parseFloat(a) - parseFloat(b),
    '*': (a, b) =>parseFloat(a) * parseFloat(b),
    '/': (a, b) =>parseFloat(a) / parseFloat(b),
}
function updateDisplay(numValue){
    // do stuff here
    return 1
}
// handdle clicks of numbers, will concatenate number if no operator
//is currently selected, will mathematically assess the last operator
//number combination if the number click occurs after operator has been selected
function numClickHandler(numValue) {
    if (numberStorage.length > 0 && currentOperator === '') {
        numberStorage[0] = numberStorage[0] + numValue.toString()
    }else if (numberStorage > 0 && currentOperator ==! ''){
        if (currentOperator)
    }
}


// function equalButton(operator)
