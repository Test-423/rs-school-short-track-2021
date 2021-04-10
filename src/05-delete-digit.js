function deleteDigit(n) {
  const arr = [];
  const numeric = String(n).split('');
  for (let i = 0; i < numeric.length; i++) {
    arr.push(Number(numeric.filter((elem, index) => index !== i).join('')));
  }
  return Math.max(...arr);
}

module.exports = deleteDigit;
