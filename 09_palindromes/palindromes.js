const palindromes = function (string) {
    string = string.replace(/[^\w\s\']|_/g, "").replace(/\s/g, '').toLowerCase();
    let stringReverse = string.split("").reverse().join("")
    if (stringReverse === string) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
