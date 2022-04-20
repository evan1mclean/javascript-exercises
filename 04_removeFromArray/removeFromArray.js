const removeFromArray = function(array, ...variableArgs) {
    for (let i = 0; i < variableArgs.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (variableArgs[i] === array[j]) {
                array.splice(j, 1);
            }
        }       
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
