# Miscellaneous Coding Scenarios

## 1) **Find Duplicate Values in an Array** :
- ### Uses the ```filter()``` array method to loop over the values (elements) and indexes within the input array
- ### If a value is found within the list that is not at the first indexed position, it is a duplicate
  - ### This is because the ```indexOf()``` method returns **the first** index at which the element is found
  - ### If the value is found at another index that isn't the first, that value is a duplicate

<br />

```
===== Example #1 =====
input: [ 12, 15, 67, 54, 12, 36, 54, 0, 32, 87 ]
output: [ 12, 54 ]

===== Example #2 =====
input: [ "hi", ".", "how", "are", "hi", "you", ".", "?" ]
output: [ "hi", "." ]
```

<br />
<br />

## 2) **Find the Longest Consecutive Range of Numbers in an Array** :
- ### This function works by **placing all values in the array as a key in a dictionary**, and setting all of their values to **true**
  - ### ```for...of { arr[i] = value } ```
  - ### Since its a dictionary, it will not copy duplicates
  - ### Duplicates are not needed here
- ### The function then selects a number in the array **depending on if has a value of true in the dictionary**
  - ### ***If no true values are left, the for loop ends and the longestRange is returned***
- ### If a true value is indexed over, it is set to false and becomes the starting number in the range (currentLength = 1)
- ### **2 while loops** then check if values **+/- 1 (right/left)** of the current value exists
  - ### If a value is found on either side, that value is set to false in the dictionary, the currentLength increases + 1, and the while loop continues
- ### After both while loops fail, the function then checks if the currentLength (range) found is the longestRange

<br />

```
input: [ 12, 7, 0, 19, 87, 22, 14, 35, 4, 18, 11, 54, 99, 13, 11, 10 ]
output: [ 10, 14 ]
```

<br />
<br />
