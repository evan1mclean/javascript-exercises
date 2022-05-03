const fibonacci = function(n) {
    n = parseInt(n);
    let current = 1
    let previous = 0
    let num = 1;
    if (n < 0) {
        return "OOPS";
    }
    else {
        for (let i = 1; i < n; i++) {
            num = current + previous;
            previous = current;
            current = num;
        }
        return num;
    }
};

// Do not edit below this line
module.exports = fibonacci;
