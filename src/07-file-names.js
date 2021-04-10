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
  let mass = names;
  let i = 1;
  for (let j = 0, iter = 1, b; j < names.length; j++) {
    b = mass[j];
    mass = [].concat(mass.slice(0, i), mass.slice(i++).map((elem) => {
      if (elem === b) {
        return `${elem}(${iter++})`;
      }
      return elem;
    }));
    iter = 1;
  }
  return mass;
}

module.exports = renameFiles;
