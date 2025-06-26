const fibonacci = function (n) {
  if (n < 0) return "OOPS";
  if (n == 0) return 0;
  if (n == 1) return 1;

  let prevOne = 0;
  let prevTwo = 1;
  let total;

  for (let i = 2; i <= n; i++) {
    total = prevOne + prevTwo;
    prevOne = prevTwo;
    prevTwo = total;
  }

  return total;
};

// Do not edit below this line
module.exports = fibonacci;
