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

  // console.log("Left side: " + leftSide)
  // console.log("Right side: " + rightSide)

  if (leftSide > rightSide) {
      return leftSide + 1
  } else {
      return rightSide + 1
  }
}

function balancedTree (rootNode) {

  if (!rootNode) return true
  // if (rootNode.left === null && rootNode.right === null) return false

  let leftSide = getHeight(rootNode.left)
  let rightSide = getHeight(rootNode.right)

  // console.log("ls :" + leftSide)
  // console.log("rs :" + rightSide)

  if (Math.abs(leftSide - rightSide) > 1) {
      return false

  } else {
      return balancedTree(rootNode.left) && balancedTree(rootNode.right)
    }
  }


function countNodes (rootNode) {
  // Your code here
    let num = 1

    if (!rootNode) return 0
    num += countNodes(rootNode.left)
    num += countNodes(rootNode.right)
    return num

  // if (rootNode.left === null && rootNode.right === null) return 0



  // let leftSide = getHeight(rootNode.left) +1
  // let rightSide = getHeight(rootNode.right)

  // console.log("ls :" + leftSide)
  // console.log("rs :" + rightSide)

  // let sum = rightSide + leftSide

  // console.log(sum)
  // return sum

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

// bstRoot = new TreeNode(4);
//     bstRoot.left = new TreeNode(2);
//     bstRoot.left.left = new TreeNode(1);
//     bstRoot.left.right = new TreeNode(3);
//     bstRoot.right = new TreeNode(6);
//     bstRoot.right.left = new TreeNode(5);
//     bstRoot.right.right = new TreeNode(7);

//   console.log(balancedTree(bstRoot.left))

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
