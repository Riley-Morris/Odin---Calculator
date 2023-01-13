const tester = [7, 3, 1, 5]

let currentOperator 
function updateDisplay(currentValue){
    // do stuff here
    return 1
}

function addFunc(inpArray){
    currentOperator = '+'
    return inpArray.reduce((accumulator, current)=> accumulator + current)
}

function subFunc (inpArray){
    currentOperator = '-'
    return inpArray.reduce((accumulator, current) => accumulator - current)
};

function multFunc (inpArray){
    currentOperator = '*'
    return inpArray.reduce((accumulator, current) => accumulator * current)
}

function divFunc (inpArray){
    currentOperator = '/'
    return inpArray.reduce((accumulator, current) => accumulator/current)
}

// function equalButton(operator)

console.log(divFunc(tester))


console.log(currentOperator)