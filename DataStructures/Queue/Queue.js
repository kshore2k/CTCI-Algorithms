// FIFO -> First In First Out
// Use cases: Prioritizes Insertion & Deletion. Used to track waiting order of background tasks, uploading resources, printing/task processing..
// Time: Insertion/Deletion Average/Best/Worst: O(1) Average/Worst: Searching/Access O(n)

const QueueNode = require('./QueueNode');

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    };

    enqueue(data) {
        const node = new QueueNode(data);
        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        this.size++;
        return this;
    };

    dequeue() {
        if (!this.first) return null;
        const dequeued = this.first;
        if (this.size === 1) {
            this.last = null;
        }
        this.first = this.first.next;
        dequeued.next = null;
        this.size--;
        return dequeued;
    };

    display() {
        let curr = this.first;
        let queueLine = "";
        while (curr) {
            queueLine += curr.data + " <- ";
            curr = curr.next;
        }
        console.log(queueLine);
    };
};

const q = new Queue();
