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
function encodeLine(n) {
  let str = n.split('');
  let res = '';
  while (str.length !== 0) {
    const elem = str[str.length - 1];
    let index = 0;
    for (let i = str.length - 1; i >= 0; i--) {
      if (str[i] === elem) {
        index++;
        str = str.slice(0, -1);
      } else break;
    }
    res += (index === 1) ? elem : elem + index;
  }
  return res.split('').reverse().join('');
}

module.exports = encodeLine;
