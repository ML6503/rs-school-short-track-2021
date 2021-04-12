/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const strArr = str.split('').sort();
  const uniqueArr = [...new Set(strArr)];
  let count = 0;
  let letter = null;

  for (let i = 0; i < strArr.length; i++) {
    if (letter !== strArr[i]) {
      if (count > 0) {
        uniqueArr[uniqueArr.indexOf(letter)] = `${count}${letter}`;
      }
      letter = strArr[i];
      count = 1;
    } else {
      count++;
    }
  }

  if (count > 1) {
    uniqueArr[uniqueArr.indexOf(letter)] = `${count}${letter}`;
  }

  return uniqueArr.join('');
}

// console.log(encodeLine('abbcca'));
// -> 'a2b2ca'

module.exports = encodeLine;
