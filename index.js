"use strict";

const matrix = "qwertyuio";
const anyWord = "qro";
function indexsLettersOfWord(letters, word) {
  let ar = [];
  let ar2 = [];

  for (const letter of letters) {
    ar.push(letter);
  }
  const chunk_size = Math.sqrt(ar.length);
  if (!Number.isInteger(chunk_size)) {
    return;
  }
  const groups = ar
    .map(function (e, i) {
      return i % chunk_size === 0 ? ar.slice(i, i + chunk_size) : null;
    })
    .filter(function (e) {
      return e;
    });

  for (const letter of word) {
    for (const group of groups) {
      if (group.includes(letter)) {
        ar2.push(groups.indexOf(group));
        ar2.push(group.indexOf(letter));
      }
    }
  }
  return ar2;
}
console.log(indexsLettersOfWord(matrix, anyWord));

// function indexsLettersOfWord() {
//   const letters = prompt("Enter array of letters").toLocaleLowerCase();
//   const word = prompt("Enter word").toLocaleLowerCase();

//   let ar = [];
//   let ar2 = [];

//   for (const letter of letters) {
//     ar.push(letter);
//   }
//   const chunk_size = Math.sqrt(ar.length);

//   if (!Number.isInteger(chunk_size)) {
//     console.log(
//       "enter the number of letters from which you can extract the root"
//     );
//     return;
//   }

//   for (const letter of word) {
//     const idx = ar.indexOf(letter);
//     if (idx >= 0) {
//       ar2.push(...[Math.floor(idx / chunk_size), idx % chunk_size]);
//     }
//     if (idx === -1) {
//       console.log(`we can't find this letter "${letter}" in array`);
//     }
//   }

//   return ar2;
// }
// console.log(indexsLettersOfWord());
