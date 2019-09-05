// List of Depths: 
// Given a binary tree, design an algorithm which creates a linked list of all the nodes
// at each depth (e.g., if you have a tree with depth D, you'll have D linked lists).

const listOfDepths = (root) => {
    if(root === null) {
        return;
    }
    let map = new Map();
    let level = 1;
    map.set(level,[]);

    let q = new Queue();
    q.enqueue(new QueueNode(root));

    while(!q.isEmpty()) {
        let current = q.peek().data;
        map.get(level).push(current.data);
        console.log(`Pushing ${current.data} at level ${level}`);

        if(current.left != null) {
            q.enqueue(new QueueNode(current.left));
        }
        if(current.right != null) {
            q.enqueue(new QueueNode(current.right));
        }

        q.dequeue();

        // ?????
        if(q.peek().data == current.right || q.peek().data == current.left) {
            level++;
            map.set(level,[]);
        }
    }
    return;
};