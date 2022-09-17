// ===== INPUT =====
const array = [12, 7, 0, 19, 87, 22, 14, 35, 4, 18, 11, 54, 99, 13, 11, 10];

// ===== FUNCTION =====
const largestRange = (array) => {
  let largestRange = [];
  let longestLength = 0;
  // hashtable
  const nums = {};

  // adding nums to hashtable
  for (const num of array) {
    nums[num] = true;
  }

  // comparing hashtable to list
  for (const num of array) {
    // if a value encountered in the array is false within the dictionary, skip it (continue) and go to the next value
    // if there are no more values, the loop ends
    if (!nums[num]) continue;
    nums[num] = false;
    currentLength = 1;
    left = num - 1;
    right = num + 1;

    while (left in nums) {
      nums[left] = false;
      currentLength++;
      left--;
    }

    while (right in nums) {
      nums[right] = false;
      currentLength++;
      right++;
    }

    if (currentLength > longestLength) {
      longestLength = currentLength;
      // undoes the final incrementation of the while loop
      largestRange = [left + 1, right - 1];
    }
  }
  return largestRange;
};

// ===== CHECK =====
const test = largestRange(array);
console.log(test);
