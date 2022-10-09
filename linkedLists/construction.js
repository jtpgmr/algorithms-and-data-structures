class ListNode {
  constructor(data, next=null) {
    this.data = data
    this.next = next
  }
}

// by using the class above you can create new nodes
const node1 = new ListNode(25)
// console.log(node1)

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0
  }

  // Insert First Node (Head)
  insertFirst(data) {
    // whenever we insert a node at the first position, this.head now becomes the "next" value, so therefore the new node is the head
    let node = new ListNode(data, this.head)
    // let node = new ListNode(data, next)
    this.head = node
    this.size++
  }


  // Insert Last Node
  // if there is no head, the function makes the node to be inserted the head
  // else, start at the head and traverse to the end of the LL (until current.next === null OR until current.next)
  insertLast(data) {
    let node = new ListNode(data)

    // Case: if you try to insert last into an empty array, make this node the head
    // Else, traverse to the end
    if (!this.head) {
      this.head = node
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }

      current.next = node
    }
    this.size++
  }
  // inserting a node between the first and last
  // this is where SIZE is important
  // Insert at Index
  insertAt(data, idx) {
    // if idx is out of range
    if (idx > 0 && idx > this.size) {
      return
    }

    if (idx === 0) {
      this.head = new ListNode(data, this.head)
    }

    const node = new ListNode(data)

    let current, previous
    let counter = 0
    current = this.head
    // traverses LL until you reach the desired index position
    while (counter < idx) {
      previous = current
      counter++
      current = current.next
    }
    // once the desired position is reached, the new node is inserted between the current and previous
    // this is done by setting the new node before the current, and after the previous
    node.next = current
    previous.next = node

    this.size++
  }
  
  // Get at Index

  // Remove at Index

  // Clear LL

  // Print LL Data
  printData() {
    let current = this.head

    while (current) {
      console.log(current)
      current = current.next
    }
  }
}
const ll = new LinkedList()

ll.insertFirst(20)
ll.insertFirst(30)
ll.insertLast(5)
ll.insertAt(200, 1)


// console.log(ll)
ll.printData()


// const nodes = [0,1,1]

// const ArrToLinkedList = (arr) => {

//   const ll = new ListNode()

//   if (arr.length) {
//     arr[0] = ll.data
//     arr[1] = ll.next
//   }

//   while (ll.next !== null){
//     ll.data = arr[i]
//     ll.next = arr[i+1]
//   }
//   return ll
// }

// const test = ArrToLinkedList(nodes)
// console.log(test)