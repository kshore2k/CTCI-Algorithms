// Queue via Stacks: 
// Implement a MyQueue class which implements a queue using two stacks.

// Time Complexity: enqueue O(1) dequeue O(n)
// Space Complexity: O(1)

// Psuedo
// For enqueue: Push x to stack1
// For dequeue: If stack2 is empty, while stack1 is not empty, push everything from stack1 to stack2.
// Pop the element on top of stack2 and save in variable.
// While stack2 is not empty, push everything from stack2 back to stack1.

export class QueueViaStacks {
    constructor(){
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    };

    enqueue(node){
        this.stack1.push(node);
    };

    dequeue(){
        if(this.stack1.isEmpty() && this.stack2.isEmpty()){
            return "Queue is Empty";
        }

        // Push everything from stack1 to stack2
        if(this.stack2.isEmpty()){
            while(!this.stack1.isEmpty()){
                this.stack2.push(new StackNode(this.stack1.top.data));
                this.stack1.pop();
            }
            
        }

        // Save and Pop top of stack2
        let val = this.stack2.top.data;
        this.stack2.pop();

        // Push everything back to stack1
        while(!this.stack2.isEmpty()){
            this.stack1.push(new StackNode(this.stack2.top.data));
            this.stack2.pop();
        }

        return val;
    };

};