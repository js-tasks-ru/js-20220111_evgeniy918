/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  let mapped = arr.map(function(el, i) {
    return { index: i, value: el};
  });
  if (param === 'asc') {
    mapped.sort(function (a, b) {
      return a.value.localeCompare(b.value, 'kf', {caseFirst: 'upper'});
    });
    arr = mapped.map(function(el) {
      return arr[el.index];
    });
  }
  if (param === 'desc') {
    mapped.sort(function (b, a) {
      return a.value.localeCompare(b.value, 'ru', {caseFirst: 'upper'});
    });
    arr = mapped.map(function(el) {
      return arr[el.index];
    });
  }
  return arr;
}
