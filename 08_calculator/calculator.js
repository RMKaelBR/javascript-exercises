const add = function() {
	return arguments[0] + arguments[1];
};

const subtract = function() {
	return arguments[0] - arguments[1];
};

const sum = function() {
	// array = Array.from(arguments[0])
  if (arguments[0].length == 0)
    return 0;

  return arguments[0].reduce( (sum, arg) => {
    return sum + arg;}
    );
};

const multiply = function() {
  if (arguments[0].length == 0)
    return 0;
  
  return arguments[0].reduce( (product, arg) => {
    return product * arg;}
    );
};

const power = function() {
	if (arguments[1]==0)
    return 1
  return arguments[0]*power(arguments[0],arguments[1]-1)

}; 

const factorial = function() {
	if (arguments[0]==0)
    return 1
  return arguments[0]*factorial(arguments[0]-1)
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
