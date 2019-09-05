// Minimal Tree: 
// Given a sorted (increasing order) array with unique integer elements, 
// write an algo­rithm to create a binary search tree with minimal height.

const makeBinaryTreeMinimalHeight = (sortedArray, startIndex = 0, endIndex = sortedArray.length - 1)  => {
  
    let midPoint = Math.floor((endIndex - startIndex) / 2 + startIndex);
    let currentNode = new Node(sortedArray[midPoint]);

    if (startIndex > endIndex) {
      return null;
    }
    
    currentNode.left = makeBinaryTreeMinimalHeight(sortedArray, startIndex, midPoint - 1);
    currentNode.right = makeBinaryTreeMinimalHeight(sortedArray, midPoint + 1, endIndex);
    return currentNode;

};