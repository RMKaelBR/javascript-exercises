const reverseString = function(string) {
  let reversedString = ""
  // string = string.split("").reverse
  // reversedString = string.split("").reverse
  string.split("").reverse().forEach(element => {
    reversedString += element
  });
  return reversedString
};

// Do not edit below this line
module.exports = reverseString;
