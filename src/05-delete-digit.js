/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

// if (num !== res[i] && highest < parseInt([num, res[i]].join(''), 10)) {
//   highest = parseInt([num, res[i]].join(''), 10);
//   // console.log('2 num', parseInt([num, res[i]].join(''), 10));
// }

// function deleteDigit(n) {
//   let highest = 0;
//   const res = n.toString(10).split('').map(Number);
//   let compArr = [...res];

//   const lowest = Math.min(...res);
//   console.log('loww', lowest);

//   for (let i = 0; i < res.length; i++) {
//     // console.log('num', parseInt(res.splice(i, 1).join(''), 10));
//     delete compArr[i];

//     const compareNum = parseInt(compArr.join(''), 10);

//     highest = compareNum;

//     console.log("high", highest);

//     if (highest < compareNum) {
//       compArr = res;
//       console.log(compArr);
//     }

//   }

//   return highest;
// }

// console.log(deleteDigit(1001));

function deleteDigit(n) {
  return n;
}

module.exports = deleteDigit;
