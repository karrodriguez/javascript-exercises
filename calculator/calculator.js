const add = function(a, b) {
  return a + b;
	
};

const subtract = function(a, b) {
  return a - b;
	
};

const sum = function(array) {
  return array.reduce((total, currentVal) => total + currentVal, 0);
	
};

const multiply = function(array) {
  return array.reduce((total, currentVal) => total * currentVal);

};

const power = function(a, b) {
  return a**b;
	
};

const factorial = function(a) {
  if (a == 0) {
    return 1;
  }
  return a * factorial(a - 1);
}

console.log(factorial(10));

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};


