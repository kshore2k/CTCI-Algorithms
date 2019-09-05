export class BSTNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    };
};

export class BST {
    constructor() {
        this.root = null;
    };

    insert(data) {
        let newNode = new BSTNode(data);

        if(this.root == null){
            this.root = newNode;
            return;
        }
        
        let current = this.root;
        
        while(true){
            if(data > current.data){
                if(!current.right){ 
                    current.right = newNode; 
                    break; 
                }
            current = current.right;

            } else if(data < current.data){
                if(!current.left){ 
                    current.left = newNode; 
                    break; 
                }
            current = current.left;

            } else {
                break;
            }
        };
    };

    findNode(root, data) {
        if(root === null) return null;
        else if(data < root.data) {
            return this.findNode(root.left, data);
        } else if(data > root.data) {
            return this.findNode(root.right, data);
        } else {
            return root;
        }
    };

    // BREADTH FIRST SEARCH
    searchLevelOrder(root) {
        if(root === null) {
            return;
        }

        let q = new Queue();
        q.enqueue(new QueueNode(root));

        while(!q.isEmpty()) {
            let current = q.peek().data;
            console.log(current.data);

            if(current.left != null) {
                q.enqueue(new QueueNode(current.left));
            }
            if(current.right != null) {
                q.enqueue(new QueueNode(current.right));
            }

            q.dequeue();
        }
        return;
    };

    // DEPTH FIRST SEARCHES
    searchInOrder(node) {
        if(node === null) {
            return;
        }
        this.searchInOrder(node.left);
        console.log(node.data);
        this.searchInOrder(node.right);
    };

    searchPreOrder(node) {
        if(node === null) {
            return;
        }
        console.log(node.data);
        this.searchPreOrder(node.left);
        this.searchPreOrder(node.right);
    }

    searchPostOrder(node) {
        if(node === null) {
            return;
        }
        this.searchPostOrder(node.left);
        this.searchPostOrder(node.right);
        console.log(node.data);
    }
};