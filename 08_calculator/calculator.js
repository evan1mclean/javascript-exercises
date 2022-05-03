const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
};

const multiply = function(numbers) {
  let total = 1;
  numbers.forEach(item => {
    total *= item;
  })
  return total;
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
	if (num === 0 || num === 1) {
    return 1;
  }
  else {
    let total = 1;
    while (num > 1) {
      total *= num;
      num--;
    }
    return total;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
