// Check Balanced: 
// Implement a function to check if a binary tree is balanced. 
// For the purposes of this question, a balanced tree is defined to be a tree such that 
// the heights of the two subtrees of any node never differ by more than one.

// pseudo:
// traverse the tree and get heights of left and right sub trees. 
// If height difference is greater than 1 return false.
// recurse on left and right nodes.

// time complexity: O(N log N)
// space complexity: O(N)

const getHeight = (root) => {
    if(root === null) return -1;

    return (Math.max(getHeight(root.left), getHeight(root.right)) + 1);
};

const isBalancedBST = (root) => {
    if(root === null) return true;

    let heightDifference = Math.abs(getHeight(root.left) - getHeight(root.right));

    if(heightDifference > 1) return false;
    else {
        return isBalancedBST(root.left) && isBalancedBST(root.right);
    }
};