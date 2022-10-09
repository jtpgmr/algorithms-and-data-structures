// ===== INPUT =====
const testSll = {
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

// ===== FUNCTION =====
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  let currentNode = linkedList;
  while (currentNode !== null) {
    let nextDistinctNode = currentNode.next
    // if the next Node is not null but equal to the current Node (is a duplicate),
    // just skip over it, by continuing to its next value
    while (nextDistinctNode !== null && nextDistinctNode.value === currentNode.value) {
      nextDistinctNode = nextDistinctNode.next
    }

    // if the while loop above is not triggered, move the nextDistinctNode pointer up one
    // then move the currentNode (you move p2, then)
    // the currentNode reshifts to the next non-duplicate node
    // the currentNode value is retained in the currentNode variable, until the 
    // next distinct node is found
    currentNode.next = nextDistinctNode
    currentNode = nextDistinctNode
  }
  return linkedList;
}

// ===== CHECK =====
const g = new Node(testGraph);
console.log(g.value.nodes)
