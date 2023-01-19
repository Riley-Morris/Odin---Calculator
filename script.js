
// Global variables initialize
let operatorStorage = ''
let numberStorage = []
let toggler = 0
//Define operators within an Object to use later to shorten checks
const operatorFunctions = {
    '+': (a, b) => a + b,
    '-': (a, b) =>a - b,
    '*': (a, b) =>a * b,
    '/': (a, b) =>a / b
}
function updateDisplay(numValue){
    // do stuff here
    return 1
}
// handdle clicks of numbers, will concatenate number if no operator
//is currently selected or add to number storage
//toggler set to 1 to check if user wants to create something larger than 9
function numClickHandler(numValue) {
    // if trying to combine 1 digit numbers to make something larger than 9
    if (numberStorage.length > 0 && toggler === 1) {
        numberStorage[numberStorage.length - 1] = parseFloat(numberStorage[numberStorage.length - 1].toString() + numValue.toString())
    
    }else {
        numberStorage.push(numValue)
        toggler = 1
    }
}

//operator button func
//check whether there are already 2 nums in storage and will operate if clicked
function operatorHandler(operatorValue){
    toggler = 0
    if (operatorStorage === '') {
        operatorStorage = operatorValue
    } else {
        numberStorage  = [operatorFunctions[operatorStorage](numberStorage[0], numberStorage[1])]
        operatorStorage = operatorValue
        //updateDisplay(numberStorage[0])
    }
}

//make sure there are 2 numbers in storage, else just keep numStorage the same
//run update display at end
function equalButton(operator){
    
}