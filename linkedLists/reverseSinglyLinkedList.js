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

function reverseLinkedList(head) {
  // Write your code here.
  let previousNode = null, currentNode = head

  while (currentNode !== null) {
    const nextNode = currentNode.next
    // points next property in opposite direction
    currentNode.next = previousNode
    previousNode = currentNode
    currentNode = nextNode
  }
  return previousNode
}

// ===== CHECK =====
const g = new Node(testGraph);
console.log(g.value.nodes)
