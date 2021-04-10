/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  if (matrix.length === 1) {
    return matrix[0][0];
  }
  const addArray = [];

  matrix.map((arr, index) => {
    for (let i = 0; i < arr.length; i++) {
      if ((arr[i] !== 0 && index === 0)
      || (arr[i] !== 0 && index > 0 && matrix[index - 1][i] !== 0)) {
        addArray.push(arr[i]);
      }
    }
    return addArray;
  });

  return addArray.reduce((a, b) => a + b);
}

module.exports = getMatrixElementsSum;
