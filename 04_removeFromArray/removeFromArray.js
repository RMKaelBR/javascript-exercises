const removeFromArray = function() {
  realArray = Array.from(arguments)
  // console.log(arguments[0])
  arguments[0] = arguments[0].filter((element) => {
    if (!realArray.includes(element)) 
      return element;
    });
  // console.log(arguments[0])
  return arguments[0];
};

// Do not edit below this line
module.exports = removeFromArray;
