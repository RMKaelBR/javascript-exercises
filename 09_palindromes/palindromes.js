const palindromes = function () {
  let string = arguments[0].toLowerCase().split("")
  string = string.filter((letter) => {
    if (letter.match(/[a-z0-9]/i))
      return letter;
  })
  stringOriginal = string.join()
  stringReversed = string.reverse().join()
  if (string == stringOriginal)
    return true
  else
    return false
};

// Do not edit below this line
module.exports = palindromes;
