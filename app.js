"use strict";
const a = {
  rt: 23,
  re: {
    a: 23,
  },
};
const b = {
  rt: 23,
  re: {
    a: 23,
  },
};
console.log(JSON.stringify(a) === JSON.stringify(b));
function canIPass(age) {
  const passed = age >= 18 ? true : false;
  return passed;
}
const numbers = [1, 2, 3, 4, 5];
function getAmount(arr) {
  return arr.reduce((acc, item) => {
    return acc + item;
  }, 0);
}
console.log(getAmount(numbers));
