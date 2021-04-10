/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = [];
  const numeric = String(n).split('');
  for (let i = 0; i < numeric.length; i++) {
    arr.push(Number(numeric.filter((elem, index) => index !== i).join('')));
  }
  return Math.max(...arr);
}

module.exports = deleteDigit;
