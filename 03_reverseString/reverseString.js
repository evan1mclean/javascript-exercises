const reverseString = function(string) {
    let splitArray = string.split("");
    let joinArray = [];
    for (let i = (splitArray.length - 1); i >= 0; i--) {
        joinArray.push(splitArray[i]);
    }
    return string = joinArray.join("");
};
// Do not edit below this line
module.exports = reverseString;
