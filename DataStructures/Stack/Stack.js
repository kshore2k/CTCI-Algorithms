// STACK
// LIFO structure -> Last In First Out
// Time: Insertion/Removal Average/Best/Worst: O(1) Average/Worst: Searching/Access O(n)
// Use Cases: Stacks prioritize insertion/removal. Used for things like managing function invocations (call stack). Undo/Redo. Routing (the history object).

const StackNode = require('./StackNode');

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.size = 0;
    };

    push(data) {
        const node = new StackNode(data);
        if (!this.top) {
            this.top = node;
            this.bottom = node;
        } else {
            node.next = this.top;
            this.top = node;
        }
        this.size++;
        return this;
    };

    pop() {
        if (!this.top) return;
        const popped = this.top;
        if (this.size === 1) {
            this.bottom = null;
        } 
        this.top = this.top.next;
        popped.next = null;
        this.size--;
        return popped;
    };

    display() {
        let curr = this.top;
        while (curr !== null) {
            console.log(`${curr.data}\n-`);
            curr = curr.next;
        }
    }
};

let stack = new Stack();
stack.push(5)
stack.push(4)
stack.push(3)
stack.push(2)
stack.push(1)
// stack.display()
console.log("TOP: " + stack.top.data + " BOTTOM: " + stack.bottom.data)
console.log("popping: " + stack.pop().data)
console.log("TOP: " + stack.top.data + " BOTTOM: " + stack.bottom.data)
console.log("popping: " + stack.pop().data)
console.log("TOP: " + stack.top.data + " BOTTOM: " + stack.bottom.data)
console.log("popping: " + stack.pop().data)
console.log("TOP: " + stack.top.data + " BOTTOM: " + stack.bottom.data)
console.log("popping: " + stack.pop().data)
console.log("TOP: " + stack.top.data + " BOTTOM: " + stack.bottom.data)
console.log("popping: " + stack.pop().data)
console.log("TOP: " + stack.top + " BOTTOM: " + stack.bottom)
stack.display()
