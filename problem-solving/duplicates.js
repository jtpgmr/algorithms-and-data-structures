// ===== INPUT =====
const duplicateArrayNum = [12, 15, 67, 54, 12, 36, 54, 0, 32, 87];
const duplicateArrayStr = ["hi", ".", "how", "are", "hi", "you", ".", "?"];

// ===== FUNCTION =====
const getDuplicates = (arr) => {
  const duplicates = [];

  arr.filter((ele, i, arr) => {
    // if an element is found within the list that is not at the first indexed position, it is a duplicate
    if (arr.indexOf(ele) !== i) {
      duplicates.push(ele);
    }
  });
  return duplicates;
};

// ===== CHECK =====
const numTest = getDuplicates(duplicateArrayNum);
console.log(numTest);

const strTest = getDuplicates(duplicateArrayStr);
console.log(strTest);
