// Successor: 
// Write an algorithm to find the "next" node (i.e., in-order successor) of a given node in a binary search tree. 
// *You may assume that each node has a link to its parent.

// case 1: Node has a right subtree
// Sucessor will be left most node of right subtree (min of right subtree)

// case 2: Node does not have right subtree
// Successor will be first ancestor at which given node is in left subtree

// Time complexity: O(log n) n being height of the tree 
// Space complexity: O(n)

const inOrderSuccessor = (node) => {
    // case 1
    if(node.right) {
        node = node.right;
        while(node.left) {
            node = node.left;
        }
        return node;
    }
    // case 2
    let current = node;
    let parent = node.parent;
    while(parent && parent.left !== current) {
        current = parent; //climb up
        parent = parent.parent;
    }
    return parent;
};