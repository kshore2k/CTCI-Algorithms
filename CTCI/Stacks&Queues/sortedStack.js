// Sort Stack: 
// Write a program to sort a stack such that the smallest items are on the top. 
// You can use an additional temporary stack, but you may not copy the elements into any other data structure (such as an array). 
// The stack supports the following operations: push, pop, peek, and isEmpty.

// Psuedo
// Push first value given.
// Compare next value with stack top
// If next value is less than or equal to first stack.top or if stack.top = null ,push onto first stack. 
// While next value is greater than first stack.top or first stack.top != null, pop stack.top and push to second stack.
// Pop and push all values from second stack back to first stack

// time complexity: O(n)
// space complexity: O(1)

export class sortedStack {
    constructor() {
        this.top = null;
        this.container = new Stack();
    };

    push(node) {
        if(this.isEmpty()) {
            this.top = node;
            return;
        }
        if(node.data <= this.top.data) {
            node.next = this.top;
            this.top = node;
            return;
        } else {
            while(!this.isEmpty() && node.data > this.top.data) {
                let popped = this.pop();
                this.container.push(new StackNode(popped));
            }
            this.push(node);
            while(!this.container.isEmpty()) {
                let popped = this.container.pop();
                this.push(new StackNode(popped));
            }
            return;
        }
    };

    pop() {
        if(this.top === null) {
            return "Empty Stack";
        }
        let node = this.top.data;
        this.top = this.top.next;
        return node;
    };

    peek() {
        if(this.top === null) {
            return "Empty Stack";
        }
        return this.top.data;
    };

    isEmpty() {
        return this.top === null;
    };

    display() {
        let current = this.top;
        while(current != null) {
            console.log(current.data);
            current = current.next;
        }
    };
};
