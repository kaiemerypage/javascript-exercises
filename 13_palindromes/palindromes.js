const palindromes = function (string) {
  string = string.replace(/\W+/g, "").toLowerCase();
  for (let i = 0; i < string.length / 2; i++) {
    if (string.at(i) !== string.at(-i - 1)) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
