// ===== INPUT =====
const testArray = [7, -55, 23, 0, 14, -8, -13, 25];

// ===== FUNCTION =====
const kadanesAlgorithm = (array) => {
  // keeps track of the max ending after an iteration
  let maxEndingHere = array[0]
  // keeps track of the highest sum encountered during the entire loop
  let maxSoFar = array[0]

  for (let i=1; i<array.length;i++) {
    const num = array[i]
    // checks wether including the next value in the iteration increases the maxEndingHere or not
    // IMPORTANT FOR DEALING WITH NEGATIVES
    maxEndingHere = Math.max(num, maxEndingHere + num)
    // checks if the highest sum encountered is from this current iteration or a prior one
    maxSoFar = Math.max(maxSoFar, maxEndingHere)
  }

  return maxSoFar
}

// ===== CHECK =====
const test = kadanesAlgorithm(testArray);
console.log(test);