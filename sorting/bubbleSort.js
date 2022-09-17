// ===== INPUT =====
const testArray = [7, 55, 23, 0, 14, -8, -13, 25];

// ===== FUNCTION =====
const bubbleSort = (array) => {
  // counter for optimization since array
  // becomes more sorted per iteration
  let counter = 0;
  let isSorted = false;

  // initalized to false
  while (!isSorted) {
    // reverted to true for the iteration
    isSorted = true;
    for (let i = 0; i < array.length - 1 - counter; i++) {
      if (array[i] > array[i + 1]) {
        // if a swap occurs, the array was therefore unsorted
        // so another iteration will occur (isSorted reset to false)
        swap(i, i + 1, array);
        isSorted = false;
      }
    }
    counter++;
  }
  return array;
};

// ===== HELPER FUNCTION =====
const swap = (i, j, array) => {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
};

// ===== CHECK =====
const test = bubbleSort(testArray);
console.log(test);
