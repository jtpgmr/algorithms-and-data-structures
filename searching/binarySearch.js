// ===== INPUT =====
const testArray = [-82, -39, -7, 0, 14, 23, 56];
const testTarget = -7

// ===== FUNCTION =====
const binarySearch = (array, target) => {
  let left = 0,
      right = array.length,
      mid = null,
      potentialMatch = null;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    potentialMatch = array[mid];

    if (target === potentialMatch) {
      return mid;
    } else if (target < potentialMatch) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
};

// ===== CHECK =====
const test = binarySearch(testArray, testTarget);
console.log(test);