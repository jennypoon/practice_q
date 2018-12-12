'use strict';
var conditionalSum = function (values, condition) {
  let sum = 0;

  values.forEach((i) => {
    if (condition === "even" && i % 2 === 0) {
      sum += i
    }
    if (condition === "odd" && i % 2 != 0) {
      sum += i;
    }
  });

  return sum;
}


console.log(conditionalSum([1, 2, 3, 4, 5], "even")); //6
console.log(conditionalSum([1, 2, 3, 4, 5], "odd")); //9
console.log(conditionalSum([13, 88, 12, 44, 99], "even")); //144
console.log(conditionalSum([], "odd")); //0

