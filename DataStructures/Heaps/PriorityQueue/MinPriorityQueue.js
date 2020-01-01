const PQNode = require('./PQNode');
// MIN PRIORITY QUEUE
// Similar to binary heap except uses node priority level instead of values to make comparisons.
// Lower value as priority means Higher priority i.e. 1 has higher priority than 5. The opposite is true for a Max Priority Queue.

// Example: 
//                              Node: 
//                      {val: 12, priority: 1}
//                          /          \
//                        Node:       Node: 
//         {val: 5, priority: 3}     {val: 17, priority: 5}

class MinPriorityQueue {
    constructor() {
        this.values = [];
    };

    enqueue(val, priority) {
        const node = new PQNode(val, priority);
        this.values.push(node);
        let currIdx = this.values.length - 1;

        while (currIdx > 0) {
            let parentIdx = Math.floor((currIdx - 1) / 2);
            if (this.values[currIdx].priority >= this.values[parentIdx].priority) break;
            this.swap(currIdx, parentIdx);
            currIdx = parentIdx;
        }

        return this;
    };

    dequeue() {
        this.swap(0, this.values.length - 1);
        let dequeued = this.values.pop();
        let currIdx = 0;
        let length = this.values.length;

        while (currIdx <= Math.floor((length - 2) / 2)) {
            let leftChildIdx = currIdx * 2 + 1;
            let rightChildIdx = currIdx * 2 + 2;

            if (leftChildIdx >= length) break;
            if (rightChildIdx >= length) {
                if (this.values[currIdx].priority > this.values[leftChildIdx].priority) {
                    this.swap(currIdx, leftChildIdx);
                    currIdx = leftChildIdx;
                } else break;
            } else {
                if (this.values[currIdx].priority > this.values[leftChildIdx].priority &&
                    this.values[leftChildIdx].priority < this.values[rightChildIdx].priority) {
                        this.swap(currIdx, leftChildIdx);
                        currIdx = leftChildIdx;
                        continue;
                    }
                else if (this.values[currIdx].priority > this.values[rightChildIdx].priority &&
                    this.values[rightChildIdx].priority < this.values[leftChildIdx].priority) {
                        this.swap(currIdx, rightChildIdx);
                        currIdx = rightChildIdx;
                        continue;
                } else break;
            }
        }
        return dequeued;
    };

    // ALTERNATE
    dequeue() {
        const min = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;

            let currIdx = 0;
            const length = this.values.length;
            const element = this.values[0];
            while (true) {
                let leftChildIdx = currIdx * 2 + 1;
                let rightChildIdx = currIdx * 2 + 2;
                let leftChild, rightChild;
                let swapIdx = null;

                if (leftChildIdx < length) {
                    leftChild = this.values[leftChildIdx];
                    if (leftChild.priority < element.priority) {
                        swapIdx = leftChildIdx;
                    }
                }
                if (rightChildIdx < length) {
                    rightChild = this.values[rightChildIdx];
                    if (rightChild.priority < leftChild.priority && rightChild.priority < element.priority) {
                        swapIdx = rightChildIdx;
                    }
                }
                if (!swapIdx) break;
                this.swap(currIdx, swapIdx);
                currIdx = swapIdx;
            }
        }
        return min;
    };

    swap(idx1, idx2) {
        let temp = this.values[idx1];
        this.values[idx1] = this.values[idx2];
        this.values[idx2] = temp;
    };

    display() {
        let log = "";
        for (let node of this.values) {
            log += node.val + " -> ";
        }
        console.log(log);
    };
};

const pq = new MinPriorityQueue();