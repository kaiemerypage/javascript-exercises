const sumAll = function (num1, num2) {
  if (
    !Number.isInteger(num1) ||
    !Number.isInteger(num2) ||
    num1 < 0 ||
    num2 < 0
  ) {
    return "ERROR";
  }

  const startNum = Math.min(num1, num2);
  const endNum = Math.max(num1, num2);

  let sum = 0;
  for (i = startNum; i <= endNum; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
