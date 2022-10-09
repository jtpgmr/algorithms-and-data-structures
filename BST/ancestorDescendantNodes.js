
// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// O(h) time | O(1) space - where h is the height of the tree
// ad represents an input which is a possible ancestor or descandant of the middle 
// we check the first and third input value's placement in the tree, with relation 
// to the middle
function validateThreeNodes(ad1, middle, ad2) {
  // Write your code here.
  // this checks if ad1 is a descendant and ad2 is an ancestor
  if (isDescendant(middle, ad1)) return isDescendant(ad2, middle)

   // this checks if ad2 is a descendant and ad1 is an ancestor
  if (isDescendant(middle, ad2)) return isDescendant(ad1, middle)
  return false;
}

// this is ideal because this binary tree is unidirectional and reads downward
function isDescendant(descendant, ancestor) {
  // while the potential descendant input is not null (wasn't found) or isn't the
  // target (not currently found) continue the loop
  while (descendant !== null && descendant !== ancestor) {
    // this is because in a BST, smaller values are towards the left, while greater are towards the right
    descendant = ancestor.value < descendant.value ? descendant.left : descendant.right
  }

  // this function returns a boolean of whether or not the target was found
  return descendant === ancestor
}
