# Comparison Algorithms

## 1) **Kadane's Algorithm**:
- ### Determines the **maximum contiguous sum** in the input array
  - ### If the array is only positive numbers, the answer is simply the sum of all the values within the array
  - ### This algorithm accounts for **negative** values as well
- ### The function works by iterating through each value of the input array, and, at each index, using *Math.max()* to check whether array[i+1] OR the sum of the prior iteration(s) is higher
- ### It also keeps track of the highest value encountered after each index incrementation (*maxSoFar*)

### [Image Ref](https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/)

<img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/kadane-Algorithm.png" alt="Bubble Sort" height="350" width="600">


<br />
<br />
