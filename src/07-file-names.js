/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const newNames = [...names];
  const count = {};

  newNames.forEach((n, i) => {
    if (newNames.indexOf(n) !== i) {
      // console.log('we are in 2nd el', n);
      // eslint-disable-next-line operator-assignment
      const c = n in count ? count[n] = count[n] + 1 : count[n] = 1;
      // console.log('count', c);
      let j = c + 1;
      let k = `${n}'('${j}')'`;

      while (newNames.indexOf(k) !== -1) {
        k = `${n}'('${j++}')'`;
        newNames[i] = k;
      }
    }
    return newNames;
  });
  // throw new Error('Not implemented');
  return newNames;
}

// const names = ['file', 'file', 'image', 'file(1)', 'file'];

// console.log(renameFiles(names));

module.exports = renameFiles;
