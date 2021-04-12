/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  // return email.split('@')[1];
  return email.split('@')[email.split('@').length - 1];
}

// console.log(getEmailDomain('very.unusual.@.unusual.com@usual.com'));

module.exports = getEmailDomain;
