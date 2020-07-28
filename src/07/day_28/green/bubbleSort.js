// Time
// the worst case scenario O(n^2)
// the base case scenario O(n) when an array is a sorted array
// Space O(1)

function bubbleSort(array) {
  const length = array.length - 1;
  let counter = 0;
  let isSorted = false;

  // iterate array until the array is sotred
  while (!isSorted) {
    isSorted = true;

    for (let i = 0; i < length - counter; i++) {
      // eslint-disable-line no-plusplus
      // length - counter
      // when one cycle is completed, the end of array is the largest number
      // Therefore, we don't have to check sorted element
      if (array[i] > array[i + 1]) {
        swap(i, i + 1, array); // eslint-disable-line no-use-before-define
        // if swapped happend, it means that array should be check if it is sorted.
        isSorted = false;
      }
    }

    counter++; // eslint-disable-line no-plusplus
  }
  return array;
}

function swap(i, j, array) {
  const temp = array[i];
  array[i] = array[j]; // eslint-disable-line no-param-reassign
  array[j] = temp; // eslint-disable-line no-param-reassign
}

// Do not edit the line below.
exports.bubbleSort = bubbleSort;
