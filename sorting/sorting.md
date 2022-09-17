# Sorting Algorithms

## 1) **Bubble Sort** :
- ### Function starts at the *beginning* of an array (start index -- 0), and moves *towards the end*
  - ### Iterates through **array.length** since every item is checked until the very end of the array is reached
- ### For each iteration, the function compares the value of the current item in the array with the value of the next item
- ### If the value of the item at the current index is greater than the value ahead of it, a *swap* occurs
  - ### array[ i ] > array[ i + 1 ]

- ### The **swap** helper function also acts as a sort of i-- (decrement) since i is declared back as the lower value
- ### Whenever the number at the current value being indexed is greater than the next value, **it is pushed up the array until either the value ahead of it is greater OR the end is reached**
  - ### This is why a **counter** can be added, since the array becomes more sorted for each iteration
  - ### The function does not need to traverse the entire array with each iteration

### [Image Ref](https://medium.com/austins-software-engineering-journey/bubble-sort-b2f0d63e38f7)

<img src="https://miro.medium.com/max/556/0*lq-ZpDYjvYGmS7PO" alt="Bubble Sort" height="350" width="600">


<br />
<br />

## 2) **Insertion Sort** :
- ### Function starts at index *1*, and moves towards the end of an array, while *comparing the value at the prior index* 
- ### Uses the ***same helper Swap function as Bubble Sort***
- ### ***i*** keeps track of the index with the highest value, while ***j*** tracks the values behind i and ensures the values are in sorted order
  - ### if j is less than the value behind it, the values are swapped, and this persists until the value at j is no longer smaller than the prior value
  - ### if this portion of the iteration is completed, i increments since the values behind it are sorted by j


### [Image Ref](https://medium.com/austins-software-engineering-journey/insertion-sort-ea0645cc5a23)
### Purple blocks represent the *sorted array*

<img src="https://miro.medium.com/max/765/0*1zi2XtjiLXa3LYZh.PNG" alt="Insertion Sort" height="350" width="600">

<br />
<br />

## 3) **Selection Sort** :
- ### Function starts at the *beginning* of an array (start index === 0), and moves *towards the end*
- ### Throughout the sort, we split the values between *two imaginary subarrays*
  - ### These are the **sorted subarray** and **unsorted subarray** 
- ### The function loops through the unsorted subarray portion of the array to find the smallest value

- ### With each iteration, the start index of the iteration increments 
  - ### This tells the program that the indexes prior to the current *start index* are already sorted, and should not be included in the next selection iteration (the unsorted subarray)

- ### if the value at the *smallest index* (first value of the unsorted array) is greater than another value up the iteration (i), *the value at i becomes the smallest index value* **via a swap**

### [Image Ref](https://subscription.packtpub.com/book/application-development/9781785888731/13/ch13lvl1sec89/selection-sort)
### Purple blocks represent the *sorted array*

<img src="https://static.packt-cdn.com/products/9781785888731/graphics/image_13_007-1.jpg" alt="Selection Sort" height="450" width="600">

<br />
<br />

- ## The 3 sorting algorithms above use the same *SWAP* helper function below to move the position of 2 values within an array:

```js
const swap = (i, j, array) => {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
};
```

<br />
<br />

## 4) **Merge Sort** :

<br />
<br />

## 5) **Quick Sort** :

<br />
<br />

## 6) **Counting Sort** :

<br />
<br />

## 7) **Sort Stack** :