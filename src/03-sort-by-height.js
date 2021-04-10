/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const result = [...arr];
  const sortArr = [...arr].sort((a, b) => a - b).filter((e) => e !== -1);

  arr.map((e, i) => {
    if (e !== -1) {
      [result[i]] = sortArr;

      sortArr.splice(0, 1);
    }
    return result;
  });
  return result;
}

module.exports = sortByHeight;
