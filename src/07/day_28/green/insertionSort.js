function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    // eslint-disable-line no-plusplus
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      swap(j, j - 1, array); // eslint-disable-line no-use-before-define
      j -= 1; // eslint-disable-line no-plusplus
    }
  }
  return array;
}

function swap(i, j, array) {
  const temp = array[i];
  array[i] = array[j]; // eslint-disable-line no-param-reassign
  array[j] = temp; // eslint-disable-line no-param-reassign
}

// Do not edit the line below.
exports.insertionSort = insertionSort;
