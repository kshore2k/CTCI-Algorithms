

const levelOrder = (root) => {
    if (root == null) return [];

    let res = [], q = [];

    q.push(root);

    while (q.length > 0) {
        let level = [];
        let length = q.length;

        for (let i = 0; i < length; i++) {
            let current = q.shift();

            for (let node of current.children) {
                q.push(node);
            }

            level.push(current.val); 
        }

        res.push(level);
    }
    return res;
}