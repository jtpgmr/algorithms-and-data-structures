// ===== INPUT =====
const testGraph = {
    "nodes": [
      {"children": [2, 3, 4], "id": 1, "value": 1},
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

// ===== FUNCTION =====
class Node {
  constructor(value) {
    // takes in an obj with the property "name"
    this.value = value;
    this.children = [];
  }

   addChild = (value) => {
    // takes each "name" in the obj and pushes it
    this.children.push(new Node(value));
    return this;
  }

  depthFirstSearch = (array) => {
    array.push(this.value)
    // appends the start node, then recursively each
    for (const child of this.children) {
      child.depthFirstSearch(array)
    }
    return array
  }
}

//  ** CHECK STILL NEEDS WORK*
// ===== CHECK =====
const g = new Node(testGraph);
console.log(g.value.nodes)

