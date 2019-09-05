// Paths with Sum: 
// You are given a binary search tree in which each node contains an integer value (which might be positive or negative). 
// Design an algorithm to count the number of paths that sum to a given value. 
// The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).

const pathsWithSum = (root,targetSum) => {
    if (root === null) return 0;

    // Count paths with sum starting from the root.
    pathsFromRoot = pathsWithSumFromNode(root,targetSum,0);
    
    // Try the nodes on the left and right.
    pathsOnLeft = pathsWithSum(root.left,targetSum);
    pathsOnRight = pathsWithSum(root.right,targetSum);

    return pathsFromRoot + pathsOnLeft + pathsOnRight;
};

// Returns the number of paths with this sum starting from this node.
const pathsWithSumFromNode = (node,targetSum,currentSum) => {
    if (node === null) return 0;

    currentSum += node.data;

    let totalPaths = 0
    if (currentSum === targetSum) {
        totalPaths++;
    }

    totalPaths += pathsWithSumFromNode(node.left, targetSum, currentSum);
    totalPaths += pathsWithSumFromNode(node.right, targetSum, currentSum);

    return totalPaths;
};
