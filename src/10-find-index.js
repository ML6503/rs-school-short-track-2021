/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
// function findIndex(array, value) {
//   // const res = array.indexOf(value);

//   let res;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === value) {
//       res = i;
//     }
//   }

//   return res;
// }

function findIndex(array, value) {
  // const res = array.indexOf(value);
  let high = array.length - 1;
  let i = 0;
  let mid;

  while (i <= high) {
    mid = Math.floor((i + high) / 2);
    if (array[mid] === value) {
      return mid;
    }
    if (array[mid] < value) {
      i = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

// console.log(findIndex([5, 6, 7], 5));

module.exports = findIndex;
