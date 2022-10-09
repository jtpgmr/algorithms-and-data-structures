# The **Linked List** Data Structure

## Conceptual
- ### A linked list is a data structure where the objects are arranged in a linear order
  - ### Unlike an array, however, in which the linear order is determined by the array indices, the order in a linked list is determined by a pointer in each object.
- ### Linked Lists come in 4 key types:
### 1. **Singly-linked List (sLL)**: A unidirectional linked list where each node has a *value* and *next* property 
  - ### The first node of a sLL is designated as the **head**
  - ### The last node is the **tail** which has a *next* value of null
  - ### A common use case for a sLL is keeping track of a list of tasks that need to be completed in a select order


```js
// Singly-linked list object
{
  "head": "0",
  "nodes": [
    {"next": "1", "value": 0},
    {"next": "2", "value": 1},
    {"next": "3", "value": 2},
    {"next": "4", "value": 3},
    {"next": "5", "value": 4},
    {"next": null, "value": 5}
  ]
}

// Visualization of singly-linked list
0 --> 1 --> 2 --> 3 --> 4 --> 5
```
### 2. **Doubly-linked List (dLL)**: A bidirectional linked list where each node has a *value*, *next*, and *previous/prev* property
  - ### Bidirectionality allows for forward and backwards traversal 


### 3. **Circular linked (cLL)List**: A sLL that has no true beginning or end (head or tail)
  - ### Its formed by setting the *next* property of the last (tail) node to the first node, instead of null


### 4. **Circular doubly-linked List (cdLL)**: A cLL with bidirectionality