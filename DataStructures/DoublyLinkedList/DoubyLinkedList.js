const DLNode = require('./DLNode');

// Time: Insertion: front/back O(1)
//       Removal:   front/back O(1)
//       Searching/Access:   technically O(n/2) which is still O(n) 
// Use case: Can access nodes in half the time of Singly Linked List, however, extra pointer does take up more memory.

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    };

    push(data) {
        const node = new DLNode(data);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.size++;
        return this;
    };

    pop() {
        if (!this.head) return;
        const popped = this.tail;
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            popped.prev = null;
        }
        this.size--;
        return popped;
    };

    shift() {
        if (!this.head) return;
        const shifted = this.head;
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            shifted.next = null;
        }
        this.size--;
        return shifted;
    };

    unshift(data) {
        const node = new DLNode(data);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.size++;
        return this;
    };

    getNodeAtIndex(idx) {
        if (idx < 0 || idx >= this.size) return null;
        const mid = Math.floor(this.size / 2);
        let count;
        let curr;
        if (idx <= mid) {
            count = 0;
            curr = this.head;
            while (count < idx) {
                curr = curr.next;
                count++;
            }
        } else {
            count = this.size - 1;
            curr = this.tail;
            while (count > idx) {
                curr = curr.prev;
                count--;
            }
        }
        return curr;
    };

    setNodeValAtIndex(idx, data) {
        const node = this.getNodeAtIndex(idx);
        if (node) {
            node.data = data;
            return true;
        }
        return false;
    };

    insertNodeAtIndex(idx, data) {
        if (idx < 0 || idx > this.size) return false;
        if (idx === 0) {
            this.unshift(data);
        } else if (idx === this.size) {
            this.push(data);
        } else {
            const node = new DLNode(data);
            const prev = this.getNodeAtIndex(idx-1);
            node.next = prev.next;
            node.next.prev = node;
            prev.next = node;
            node.prev = prev;
        }
        this.size++;
        return true;
    };

    removeNodeAtIndex(idx) {
        if (idx < 0 || idx >= this.size) return;
        if (idx === 0) return this.shift();
        if (idx === this.size - 1) return this.pop();
        const removed = this.getNodeAtIndex(idx);
        removed.prev.next = removed.next;
        removed.next.prev = removed.prev;
        removed.next = null;
        removed.prev = null;
        this.size--;
        return removed;
    };

    reverse() {
        if (!this.head) return this;
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        let curr = this.tail;
        let next = null;
        while (curr !== null) {
            curr.prev = curr.next;
            curr.next = next;
            next = curr;
            curr = curr.prev;
        }
        return this;
    };

    display() {
        if (this.size === 0) {
            return console.log("Empty List");
        }
        let curr = this.head;
        let log = "null <- ";
        while (curr.next !== null) {
            log += curr.data + " <-> ";
            curr = curr.next;
        }
        log += curr.data + " -> " + curr.next;
        console.log(log);
    };
};

const list = new DoublyLinkedList();

list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
list.display();
list.reverse();
list.display()