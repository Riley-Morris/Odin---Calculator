
function addFunc(inpArray){
    return inpArray.reduce((accumulator, current)=> accumulator + current)
}

function subFunc (inpArray){
    return inpArray.reduce((accumulator, current) => accumulator - current)
};

function multFunc (inpArray){
    return inpArray.reduce((accumulator, current) => accumulator * current)
}

function divFunc (inpArray){
    return inpArray.reduce((accumulator, current) => accumulator/current)
}
