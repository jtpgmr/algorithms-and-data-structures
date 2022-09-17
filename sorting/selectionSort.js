// ===== INPUT =====
const testArray = [7, 55, 23, 0, 14, -8, -13, 25];

// ===== FUNCTION =====
const selectionSort = (array) => {
  // tracks the unsorted portion of the array
  let unsortedStartIdx = 0;

  while (unsortedStartIdx < array.length - 1) {
    let smallestIdx = unsortedStartIdx;
    // iterates to determine if the startIdx IS the smallestIdx
    for (let i = unsortedStartIdx; i < array.length; i++) {
      // if another index is found with a smaller value, that index is set as smallestIdx
      if (array[smallestIdx] > array[i]) {
        smallestIdx = i;
      }
    }
    // after the smallestIdx is found, it is swapped to be the unsortedIdx start (which is
    //  then blocked off by the loop due to incrementation)

    // this swap does nothing if the unsortedStartIdx happens to be the smallestIdx
    swap(unsortedStartIdx, smallestIdx, array);
    unsortedStartIdx++;
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
const test = selectionSort(testArray);
console.log(test);
