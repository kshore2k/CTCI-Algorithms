const SLNode = require('./SLNode');

// Time: Insertion: front/back O(1)
//       Removal:   front O(1)   back O(n)
//       Searching/Access:   O(n)
// Use case: Better than arrays when insertion & deletion at the beginning are frequent. Must traverse to insert/delete in the middle but does not require re-indexing time like arrays.

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    };

    createList(arr) {
        try {
            if (!arr.length) throw new Error("Array must contain values");
            for (let data of arr) {
                const node = new SLNode(data);
                if (!this.head) {
                    this.head = node;
                    this.tail = node;
                } else {
                    this.tail.next = node;
                    this.tail = node;
                }
                this.size++;
            }
        } catch (err) {
            console.log(err);
        }
        
    };

    push(data) {
        const node = new SLNode(data);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
        return this;
    };

    pop() {
        try {
            if (!this.head) throw new Error("Cannot Perform Pop On Empty List");
            let curr = this.head;
            let prev;
            while (curr.next !== null) {
                prev = curr;
                curr = curr.next;
            }
            this.size--;
            if (curr === this.head) {
                this.head = null;
                this.tail = null;
                return curr;
            }
            prev.next = null;
            this.tail = prev;
            return curr;
        } catch (err) {
            console.log(err);
        }
        
    };

    shift() {
        try {
            if (!this.head) throw new Error("Cannot Perform Shift On Empty List");
            let shift = this.head;
            this.head = this.head.next;
            if (!this.head) {
                this.tail = null;
            }
            this.size--;
            return shift;
        } catch (err) {
            console.log(err);
        }
    };

    unshift(data) {
        const node = new SLNode(data);
        node.next = this.head;
        this.head = node;
        if (!node.next) {
            this.tail = node;
        }
        this.size++;
        return this;
    };

    getNodeAtIndex(idx) {
        try {
            if (idx < 0 || idx >= this.size) throw new RangeError("Invalid Index On getNodeAtIndex");
            let currIndex = 0;
            let curr = this.head;
            while (currIndex !== idx) {
                curr = curr.next;
                currIndex++;
            }
            return curr;
        } catch (err) {
            console.log(err);
        }
    };

    setNodeValAtIndex(idx, data) {
        const node = this.getNodeAtIndex(idx);
        node.data = data;
        return node;
    };

    insertNodeAtIndex(idx, data) {
        try {
            if (idx < 0 || idx > this.size) throw new RangeError("Invalid Index On insertNodeAtIndex");
            this.size++;
            if (idx === 0) return this.unshift(data);
            if (idx === this.size) return this.push(data);
            const node = new SLNode(data);
            const prev = this.getNodeAtIndex(idx-1);
            node.next = prev.next;
            prev.next = node;
            return this;
        } catch (err) {
            console.log(err);
        }
    };

    removeNodeAtIndex(idx) {
        try {
            if (idx < 0 || idx >= this.size) throw new RangeError("Invalid Index On removeNodeAtIndex");
            if (idx === 0) return this.shift();
            else if (idx === this.size - 1) return this.pop();
            else {
                const prev = this.getNodeAtIndex(idx-1);
                const removed = prev.next;
                prev.next = removed.next;
                this.size--;
                return removed;
            }
        } catch (err) {
            console.log(err);
        }
    };

    removeNodesWithVal(val) {
        let prev = new SLNode(null);
        prev.next = this.head;
        let curr = this.head;
        while (curr) {
            if (curr.data === val) {
                if (curr === this.head) {
                    this.head = this.head.next;
                    curr = this.head;
                    prev.next = this.head;
                } else {
                    prev.next = curr.next;
                    curr = prev.next;
                }
            } else {
                curr = curr.next;
                prev = prev.next;
            }
        }
        return this;
    }

    reverse() {
        if (!this.head) throw new Error("Cannot Perform Reverse On Empty List");
        let curr = this.head;
        this.head = this.tail;
        this.tail = curr;

        let prev = null;
        let next;
        while (curr !== null) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return this;
    };

    display() {
        let curr = this.head;
        let log = "Head => ";
        while (curr !== null) {
            log += curr.data + " -> ";
            curr = curr.next;
        }
        log += curr;
        console.log(log);
    };
};

const list = new SinglyLinkedList();