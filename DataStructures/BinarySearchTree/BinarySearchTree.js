// Binary Search Tree

// Use cases: HTML DOM, Network routing, AI, folders in operating systems, computer file systems etc...

// Time: Insertion/Searching Average/Best: O(log n) Worst: O(n) for totally un-balanced tree.
//          As Tree size doubles, only 1 more operation/check is needed

// Breadth First Search VS Depth First Search
// BFS will use more memory on a wide tree since all children at a given level are stored at each iteration.
// DFS will take more space on a totally one-sided or unbalanced tree given each recursive call

// PreOrder VS InOrder VS PostOrder 
// InOrder gives you ascending sorted values of a tree
// PreOrder gives you ability to clone a given tree. Building a new tree given the order of values found will produce the same tree structure

const BSTNode = require('./BinarySearchTreeNode');

class BinarySearchTree {
    constructor() {
        this.root = null;
    };

    insert(data) {
        const node = new BSTNode(data);
        if (!this.root) {
            this.root = node;
            return this;
        }
        let curr = this.root;
        while (true) {
            if (node.data === curr.data) return;    // Does not allow duplicates
            if (node.data < curr.data) {
                if (!curr.left) {
                    curr.left = node;
                    return this;
                } else {
                    curr = curr.left;
                }
            } else if (node.data > curr.data) {
                if (!curr.right) {
                    curr.right = node;
                    return this;
                } else {
                    curr = curr.right;
                }
            }
        }
    };

    find(data) {
        if (!this.root) return null;
        let curr = this.root;
        while (curr.data !== data) {
            if (data < curr.data) {
                if (!curr.left) return null;
                else {
                    curr = curr.left;
                }
            } else if (data > curr.data) {
                if (!curr.right) return null;
                else {
                    curr = curr.right;
                }
            }
        }
        return curr;
    };

    breadthFirstSearch() {
        if (!this.root) return [];
        const vals = [];
        const q = [];
        q.push(this.root);

        while (q.length) {
            const curr = q.shift();
            if (curr.left) {
                q.push(curr.left);
            }
            if (curr.right) {
                q.push(curr.right);
            }
            vals.push(curr.data);
        }
        
        return vals;
    };

    // Depth First Search
    preOrderDFS(node, vals = []) {          // Visit node then all left children then all right 
        if (!node) return;
        vals.push(node.data);
        this.preOrderDFS(node.left, vals);
        this.preOrderDFS(node.right, vals);
        return vals;
    };

    inOrderDFS(node, vals = []) {           // Visit left child then current node then right child
        if (!node) return;
        this.inOrderDFS(node.left, vals);
        vals.push(node.data);
        this.inOrderDFS(node.right, vals);
        return vals;
    };

    postOrderDFS(node, vals = []) {         // Explore all left children then right children before visiting node
        if (!node) return;
        this.postOrderDFS(node.left, vals);
        this.postOrderDFS(node.right, vals);
        vals.push(node.data);
        return vals;
    };

};

//      10
//    6    15
//  3  8     20

const bst = new BinarySearchTree();
bst.insert(10)
bst.insert(6)
bst.insert(15)
bst.insert(3)
bst.insert(8)
bst.insert(20)
console.log(bst.postOrderDFS(bst.root));