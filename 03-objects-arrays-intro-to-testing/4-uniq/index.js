/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */

export function uniq(arr = []) {
  const obj = {};

  arr.forEach(item => {
    obj[item] = item;
  });

  return Object.values(obj);
}
