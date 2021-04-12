/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(domains) {
  const domainsSplit = domains.map((d) => d.split('.').reverse());
  const allRepeat = domainsSplit.filter((d, i) => d[i] === d[i + 1])[0];

  const domainsStr = domainsSplit.map((d) => d.join('.'));
  // console.log('repeat', domainsStr);

  if (allRepeat.lenght !== 1) {
    domainsStr.push(`.${allRepeat[0]}`);
  }

  const obj = { ...domainsStr.sort() };
  const objSwap = Object.entries(obj).reduce((ob, [key, value]) => ({ ...ob, [value]: key }), {});
  const keyArr = Object.keys(objSwap);
  keyArr.map((d) => {
    // console.log('key', allRepeat.includes(d.split('.')[1]));
    if (allRepeat.includes(d.split('.')[1])) {
      objSwap[d] = domainsSplit.length;
    }
    objSwap[d] = 1;
    return objSwap;
  });

  return objSwap;
}

// const domains = [
//   'code.yandex.ru',
//   'music.yandex.ru',
//   'yandex.ru',
// ];

// console.log(getDNSStats(domains));

module.exports = getDNSStats;
