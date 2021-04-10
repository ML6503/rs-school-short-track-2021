/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arrS1 = s1.split('').sort();
  const arrS2 = s2.split('').sort();
  const common = [];

  for (let i = 0; i < arrS1.length; i++) {
    for (let j = 0; j < arrS2.length; j++) {
      if (arrS1[i] === arrS2[j]) {
        common.push(arrS1[i]);
        arrS1.splice(i, 1);
      }
    }
  }

  return common.length;
}

module.exports = getCommonCharacterCount;
