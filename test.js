"use strict";
// console.log("hi");

// var obj = ["qpple", "lemon", "peach"];
// function getFruit() {
//   setTimeout(() => {
//     for (var fruit of obj) console.log(fruit);
//   });
// }
// getFruit();

// const array = [1, 2, 3, 4, 5, 6, 7, 8];
// function getNewAr(array) {
//   const newAr = array.filter((item) => item % 2 === 0);
//   for (const item of newAr) {
//     console.log(item);
//   }
// }
// getNewAr(array);
// const object = {
//   name: "ola",
//   secondName: "ala",
//   favoriuteName: "ula",
// };
// function getKeys(obj, value) {
//   const keys = Object.values(obj);
//   console.log(keys.includes(value));
// }
// getKeys(object, "ola");
// const extend = ["volodya", "vic", "vas"].join("-victor-").split("-");
// console.log(extend.lastIndexOf("victor"));

// const user = { name: "pet" };
// user.name = "y";
// console.log(user.name);

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([2, 3, 4]));

// function findLongestWord(string) {
//   // Change code below this line
//   const arr = string.split(" ");
//   const mostLonder = arr.sort((a, b) => b.length - a.length);
//   return mostLonder[0];

//   // Change code above this line
// }
// console.log(findLongestWord("yes i love you"));
// function filterArray(numbers, value) {
//   // Change code below this line

//   const newArr = numbers.filter((item) => item > value);
//   return newArr;
//   // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4], 2));

// function after1Sec(val) {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res(val);
//     }, 1000);
//   });
// }

// async function multiply(val) {
//   const val1 = await after1Sec(3);
//   const val2 = await after1Sec(5);
//   return val * val1 * val2;
// }
// multiply(2).then((val) => {
//   console.log(val);
// });
// after1Sec(2).then((val) => {
//   console.log(val);
// });

// function after1Sec(val) {
//   console.time("after1Sec");
//   return new Promise((res) => {
//     setTimeout(() => {
//       res(val);
//     }, 1000);
//     console.timeEnd("after1Sec");
//   });
// }

// async function multiply(val) {
//   const [val1, val2] = await Promise.all([after1Sec(3), after1Sec(5)]);
//   return val * val1 * val2;
// }
// multiply(3).then((val) => {
//   console.log(val);
// });
// after1Sec(2).then((val) => {
//   console.log(val);
// });
// function Storage(items) {
//   this.items = items;
// }
// Storage.prototype.getItems = function () {
//   return this.items;
// };
// Storage.prototype.addItem = function (newItem) {
//   this.items.push(newItem);
// };
// Storage.prototype.removeItem = function (item) {
//   if (this.items.includes(item)) {
//     const newAr = this.items.filter((value) => value !== item);
//     this.items = newAr;
//   }
// };
// Пиши код выше этой строки
// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]
// const str = "Banzay!";
// const message =
//   str.split("").reverse().join("").indexOf("!") === 0 ? "H0" : "B";
// console.log(message);
const ar = [
  [1, 3, 4],
  [1, 2],
  [
    [12, 3],
    [12, 4],
  ],
  [[9], [8], [[3], [7]]],
  [113, 6],
  [1, 90],
];
function getTotalBalanceByGender(users, gender) {
  let ar = 0;
  users.forEach((element) => {
    if (element.gender === gender) {
      ar += element.balance;
    }
  });
  return ar;
}

const normolizedArOfDate = "18/2/2098".split("/");
const normolizedDate = (array) => {
  let newArOfDate = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(index, element);
    if (index === 0 && element.length === 1) {
      let num = 0 + element;
      newArOfDate.push(num);
    }
    if (index === 0 && element.length >= 2) {
      newArOfDate.push(element);
    }
    if (index === 1 && element.length === 1) {
      let num = 0 + element;
      newArOfDate.push(num);
    }
    if (index === 1 && element.length >= 2) {
      newArOfDate.push(element);
    }
    if (index === 2 && element.length === 4) {
      newArOfDate.push(element);
    }
  }
  return newArOfDate;
};
const str = "abcdefghi";
function strInAr(str) {
  let newStr = "";
  let generalAr = [];
  for (let index = 0; index < str.length; index++) {
    const element = str[index];
    newStr += element;
    if (newStr.length === 2) {
      generalAr.push(newStr);
      newStr = "";
    }
  }
  if (str.length % 2 !== 0) {
    const len = str.length - 1;
    const lastEl = str.slice(len);
    const elem = `${lastEl}_`;
    generalAr.push(elem);
  }
  return generalAr;
}

function getMiddle(s) {
  if (s.length % 2 == 0) return s.substring(s.length / 2 - 1, s.length / 2 + 1);
  else
    return s.substring(Math.floor(s.length / 2), Math.floor(s.length / 2) + 1);
}
let bear = {
  sound: "roar",
  roar() {
    return this.sound;
  },
};
let cat = {
  sound: "mui",
};
bear.sound = "grunt";
let bearSound = bear.roar.bind(cat);
console.log(bearSound()); //undefined
var thing;
let func = (str = "no arg") => {
  console.log(str);
};
func(thing);
func(null);
