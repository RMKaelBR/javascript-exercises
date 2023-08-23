
const fibonacci = function(fibMax, prevFib=1, currentFib=2, fibTracker=3) {
  fibMax = parseInt(fibMax)
  
  if (fibMax >= 3) {
    if (fibTracker < fibMax) {
      fibTracker++;
      let fibHolder = currentFib
      currentFib += prevFib
      prevFib = fibHolder
      return currentFib = fibonacci(fibMax, prevFib, currentFib, fibTracker);
    }
    else
      return currentFib
  }
  else if (fibMax > 0)
    return 1;
  else
    return "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;
// 1, 1, 2, 3, 5, 8