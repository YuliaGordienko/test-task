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
// function flatDeep(array, d = 1) {
//   return d > 0
//     ? array.reduce(
//         (acc, val) =>
//           acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val),
//         []
//       )
//     : array.slice();
// }
// console.log(flatDeep(ar, Infinity));
function flatten(array) {
  var flattend = [];
  (function flat(array) {
    array.forEach(function (el) {
      if (Array.isArray(el)) {
        flat(el);
      } else {
        flattend.push(el);
      }
    });
  })(array);
  return flattend;
}
// console.log(flatten(ar));

const object1 = {
  a: 1,
  b: {
    h: 2,
    b: "string",
  },
};
const object2 = {
  a: 1,
  b: {
    h: 2,
    b: "string",
  },
};
function isEqual(object1, object2) {
  const props1 = Object.getOwnPropertyNames(object1);
  const props2 = Object.getOwnPropertyNames(object2);

  if (props1.length !== props2.length) {
    return false;
  }

  for (let i = 0; i < props1.length; i += 1) {
    const prop = props1[i];
    console.log(i, prop);
    const bothAreObjects =
      typeof object1[prop] === "object" && typeof object2[prop] === "object";

    //     if (
    //       (!bothAreObjects && object1[prop] !== object2[prop]) ||
    //       (bothAreObjects && !isEqual(object1[prop], object2[prop]))
    //     ) {
    //       return false;
    //     }
  }

  //   return true;
}
console.log(isEqual(object1, object2));
console.log(object1.b);
