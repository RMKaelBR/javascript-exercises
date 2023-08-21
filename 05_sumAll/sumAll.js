const sumAll = function() {
  if (typeof arguments[0] != "number" || typeof arguments[1] != "number")
    return "ERROR"
  else if (arguments[0] < 0 || arguments[1] < 0)
    return "ERROR"
  
  if (arguments[0] > arguments[1]) {
    lowerLimit = arguments[1];
    upperLimit = arguments[0];
  }
  else {
    lowerLimit = arguments[0];
    upperLimit = arguments[1];
  }

  let sum = 0
  for (let i = lowerLimit; i <= upperLimit; i++)
    sum += i;
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
