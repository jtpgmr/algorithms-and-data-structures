// ===== INPUT =====
const testArray = [7, 55, 23, 0, 14, -8, -13, 25];

// ===== FUNCTION =====
const insertionSort = (array) => {
  // i = 1 because you start at the index ahead and compare with the value prior
  // if no swap occurs, that means the indexes before i are sorted, and i increments (i++)
  for (let i = 1; i < array.length; i++) {
    let j = i;
    
    // the swap continously occurs as long as j is not the first index of the array (nothing to swap with) AND the value at j is smaller than the prior value
    while (j > 0 && array[j] < array[j - 1]) {
      swap(j, j - 1, array);
      j--;
    }
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
const test = insertionSort(testArray);
console.log(test);