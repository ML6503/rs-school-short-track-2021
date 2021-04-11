/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const nArr = n.split('-');

  if (nArr.length < 6) {
    return false;
  }

  const regexCheck = nArr.map((d) => {
    if (d.match(/[A-F0-9]{2}/g) !== null) {
      return d === d.match(/[A-F0-9]{2}/g)[0];
    }
    return false;
  });

  if (regexCheck.filter((e) => e === false).length !== 0) {
    return false;
  }
  return true;
}

// console.log(isMAC48Address('Z1-1B-63-84-45-E6'));
module.exports = isMAC48Address;
