// First Common Ancestor: 
// Design an algorithm and write code to find the first common ancestor of two nodes in a binary tree. 
// Avoid storing additional nodes in a data structure. 
// NOTE: This is not necessarily a binary search tree

const lCA = (root, x, y) => {
    if(root === null) return null;
    if(root.data == x || root.data === y) return root;

    let leftResult = lCA(root.left, x , y);
    let rightResult = lCA(root.right,x , y);

    if(leftResult === null) return rightResult;
    if(rightResult === null) return leftResult;

    return root;
};