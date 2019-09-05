// Random Node: 
// You are implementing a binary search tree class from scratch which, in addition to insert, find, and delete, 
// has a method getRandomNode() which returns a random node from the tree. 
// All nodes should be equally likely to be chosen. 
// Design and implement an algorithm for getRandomNode, and explain how you would implement the rest of the methods.

// Pseudo
// In RandomBST class keep track of total number of nodes the BST contains(size).
// In RandomBSTNode use RandomBST.size to give each node a unique id(num) on instertion.
// Generate a random number(random) from 1 to RandomBST.size
// Perform traversal. If node.num === random keep track of node in variable(randomNode);
// Return randomNode;

// Time: O(n)
// Space: O(1)

export class RandomBSTNode {
    constructor(data) {
        this.num = null;
        this.data = data;
        this.left = null;
        this.right = null;
    };
};

export class RandomNodeBST {
    constructor() {
        this.root = null;
        this.size = 0;
    };

    insertNode(data) {
        let newNode = new RandomBSTNode(data);

        if(this.root === null) {
            newNode.num = ++this.size;
            this.root = newNode;
            return;
        }

        let current = this.root;

        while(true) {
            if(data < current.data) {
                if(!current.left) {
                    current.left = newNode;
                    newNode.num = ++this.size;
                    break;
                }
            current = current.left;

            } else if(data > current.data) {
                if(!current.right) {
                    current.right = newNode;
                    newNode.num = ++this.size;
                    break;
                }
            current = current.right;

            } else {
                break;
            }
        }
    };

    getRandomNode() {
        let random = Math.floor((Math.random() * this.size) + 1);
        let randomNode;

        let search = (node) => {
            if(node === null) return;

            search(node.left);

            if(node.num === random) {
                randomNode = node;
            }

            search(node.right);
        };

        search(this.root);
        return randomNode;
    };

    findNode(root, data) {
        if(root === null) return null;
        else if(data < root) {
            return this.findNode(root.left, data);
        } else if(data > root) {
            return this.findNode(root.right, data);
        } else {
            return root;
        }
    };

    deleteNode() {
        //
    };
};