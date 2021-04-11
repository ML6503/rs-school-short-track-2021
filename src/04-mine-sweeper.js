/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const res = [...matrix];

  const ifAllFalse = (matrix.map((arr) => arr.every((e) => e === false)));

  if (ifAllFalse.filter((e) => e !== true).length === 0) {
    matrix.map((arr, ind) => arr.map((e, i) => {
      res[ind][i] = 0;
      return res;
    }));
  }

  matrix.map((arr, ind) => arr.map((e, i) => {
    if (e === false) {
      if ((matrix[ind][i - 1] === true && matrix[ind][i + 1] === true)
          || (matrix[ind][i - 1] === true && matrix[ind + 1][i] === true)
          || (matrix[ind][i + 1] === true && matrix[ind + 1][i] === true)
          || (matrix[ind][i + 1] === true && matrix[ind - 1][i] === true)
          || (matrix[ind][i - 1] === true && matrix[ind - 1][i] === true)
          || (matrix[ind - 1] !== undefined && matrix[ind - 1][i + 1] === true
            && matrix[ind - 1][i - 1] === true)
          || (matrix[ind + 1] !== undefined && matrix[ind + 1][i + 1] === true
            && matrix[ind + 1][i - 1] === true)) {
        res[ind][i] = 2;
      } if (((matrix[ind - 1] !== undefined && matrix[ind - 1][i + 1] === true)
            || (matrix[ind - 1] !== undefined && matrix[ind - 1][i - 1] === true))
            || ((matrix[ind + 1] !== undefined && matrix[ind + 1][i + 1] === true)
            || (matrix[ind + 1] !== undefined && matrix[ind + 1][i - 1] === true))) {
        res[ind][i] = 1;
      }
    }

    return res;
  }));
  res.map((arr, ind) => arr.map((e, i) => {
    if (typeof e === 'boolean') {
      res[ind][i] = 1;
    }
    return res;
  }));

  return res;
}

// function minesweeper(matrix) {
//   const newMatrix = [...matrix];
//   const flat = [].concat.apply([], matrix);
//   // const flat = [].concat.([...matrix]);
//   console.log(matrix[1]);
//   console.log(flat);
//   flat.map((e, i) => {
//     if (e = false && flat[i-1] === true || flat[i++] === true  || flat[i] ) {
//       flat[i] = 1;

//     }
//   });
//   return newMatrix;
// }

// const matrix = [
//   [true, false, false],
//   [false, true, false],
//   [false, false, false],
// ];

// // const matrix = [
// //   [false, false, false],
// //   [false, false, false],
// // ];
// // eslint-disable-next-line no-console
// console.log(minesweeper(matrix));

module.exports = minesweeper;
