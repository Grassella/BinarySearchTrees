const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  // Your code here
  // let currentNode = rootNode.val

  if (!rootNode.left) return rootNode.val

  if (rootNode.val > rootNode.left.val){
      return findMinBST(rootNode.left)
  }
}

function findMaxBST (rootNode) {

  if (!rootNode.right) return rootNode.val

  if (rootNode.val < rootNode.right.val){
      return findMaxBST(rootNode.right)
  }}

function findMinBT (rootNode) {

  if(!rootNode) return Infinity

  let leftSide = findMinBT(rootNode.left)
  let rightSide = findMinBT(rootNode.right)

  return Math.min(rootNode.val, leftSide, rightSide)
}


function findMaxBT (rootNode) {

  if(!rootNode) return -Infinity

  let leftSide = findMaxBT(rootNode.left)
  let rightSide = findMaxBT(rootNode.right)

  return Math.max(rootNode.val, leftSide, rightSide)
}

function getHeight (rootNode) {
  // Your code here
  if (!rootNode) return -1
  if (rootNode.left === null && rootNode.right === null) return 0

  let leftSide = getHeight(rootNode.left)
  let rightSide = getHeight(rootNode.right)

  if (leftSide > rightSide) {
      return leftSide + 1
  } else {
      return rightSide + 1
  }
}

function balancedTree (rootNode) {
  // Your code here
}

function countNodes (rootNode) {
  // Your code here
}

function getParentNode (rootNode, target) {
  // Your code here
}

function inOrderPredecessor (rootNode, target) {
  // Your code here
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
