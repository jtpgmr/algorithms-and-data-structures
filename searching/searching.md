# Searching Algorithms

# Array Searching Algorithms
## 1) **Binary Search** :
- ### An algorithm that searches for a value by **starting at the center of the input array** (cuts the array in half), then determines if the target value is greater than, lesser than or equal to the middle value
- ### It *returns* either the **index of the target value OR -1 (if not found)**
- ### If the value is not the center value, the algorithm then detects if the target value is greater than or less than the current (center) value
- ### The left (if the value is greater) or right (if the value is smaller) portions of the array are then removed (cutting the array) in half again
- ### Therefore, instead of needing to iterate over every value (Linear Search), it continuously "cuts" the array in half until it pinpoints on the target or the target is not found
  - ### The array isn't actually split in half, rather one of the cursors is shifted to eliminate either the higher or lower values, relative to the target value
- ## **Think Searching a Dictionary**
  - ### If you want to find a word starting with the letter "M", you don't check every word from A --> M. You skip to the middle to find what you need.
- ### Only works if the values are **sorted in numerical or alphabetical order**

### [Image Ref](https://learncodingfast.com/binary-search-in-python/)

<img src="https://learncodingfast.com/wp-content/uploads/2020/11/binary-search.png" alt="Binary Search" height="300" width="550">

<br />
<br />

# Graph Searching Algorithms
## 1) **Depth-First Search** :
- ### 


this search grabs items going from the far left to the far right
the search first begins at the start node, then grabs the first (left, index[0]) value of the start node, then GRABS THE FIRST CHILD OF THAT CHILD
on the way back up from the graph, the OTHER CHILD from the parent node is appened BEFORE going back up to the start node
ONCE AT THE START NODE, THE SECOND CHILD (RIGHT-SIDE) IS RETRIEVED
THE FIRST CHILD OF THE RIGHT CHILD NODE IS THEN ADDED

```js 
        graph =  1
             /   |   \
           2     3    4
         /   \      /   \
        5     6    7     8
            /   \   \
          9     10   11
```

```js
Input = {
  "graph": {
    "nodes": [
      {"children": ["2", "3", "4"], "id": 1, "value": 1},
      {"children": [5, 6], "id": 2, "value": 2},
      {"children": [], "id": 3, "value": 3},
      {"children": [7, 8], "id": 4, "value": 4},
      {"children": [], "id": 5, "value": 5},
      {"children": [9, 10], "id": 6, "value": 6},
      {"children": [11], "id": 7, "value": 7},
      {"children": [], "id": 8, "value": 8},
      {"children": [], "id": 9, "value": 9},
      {"children": [], "id": 10, "value": 10},
      {"children": [], "id": 11, "value": 11}
    ],
    "startNode": 1
  }
}
```

```js
Output: [1, 2, 5, 6, 9, 10, 3, 4, 7, 11, 8]

First: [1, 2, 5] <-- leftmost branch
Second: 2 -> [6, 9] <-- leftmost values of 2
Third: 6 -> [10] <-- remaining (second/right) child of 6

Fourth: 1 -> [3] <-- middle child (index 1)

Fifth: 1 -> [4, 7, 11] <-- leftmost branch of the last child of the start node
Sixth: 4 -> [8] <-- right-child of 4
```