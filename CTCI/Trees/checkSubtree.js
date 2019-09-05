// Check Subtree: 
// Tl and T2 are two very large binary trees, with Tl much bigger than T2. 
// Create an algorithm to determine if T2 is a subtree of Tl.
// A tree T2 is a subtree of Tl if there exists a node n in Tl such that the subtree of n is identical to T2. 
// That is, if you cut off the tree at node n, the two trees would be identical.


// Psuedo
// Find T2.root in T1.
// Perform inOrder traversal from that node and print the values to an array.
// Do the same for entire T2 tree.
// Compare arrays

// Time: O(n) linear
// Space: O(1) constant

const checkSubtree = (t1, t2) => {
    let subTreeRoot = t1.findNode(t1.root, t2.root.data);
 
    if(subTreeRoot === null) return false;
 
     const search = (root, array) => {
         if(root === null) return;
         search(root.left, array);
         array.push(root.data);
         search(root.right, array);
     };
 
     let t1vals = [];
     let t2vals = [];
 
     search(subTreeRoot, t1vals);
     search(t2.root, t2vals);
 
    return JSON.stringify(t1vals) === JSON.stringify(t2vals);
 };