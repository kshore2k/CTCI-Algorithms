// Stack of Plates: 
// Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
// Therefore, in real life, we would likely start a new stack when the previous stack exceeds some threshold. 
// Implement a data structure SetOfStacks that mimics this. 
// SetO-fStacks should be composed of several stacks and should create a new stack once the previous one exceeds capacity. 
// SetOfStacks.push() and SetOfStacks.pop() should behave identically to a single stack (that is, pop() should return the same values as it would if there were just a single stack).

// FOLLOW UP
// ImplementafunctionpopAt(int index)whichperformsapopoperationonaspecificsub-stack.

// Inputs:
// Output:
// Edge Cases:

// Time Complexity:
// Space Complexity:

export class SetOfStacks {
    constructor(threshHold){
        this.stackCapacity = threshHold;
        this.stacks = [];
        this.currentStack = 0;
    };

    push(node){
        if(this.stacks.length === 0){
            let newStack = new Stack();
            this.stacks.push(newStack);
            newStack.push(node);
            return;
        }

        if(this.stacks[this.currentStack].size() === this.stackCapacity){
            this.currentStack += 1;
            let nextStack = new Stack();
            this.stacks.push(nextStack);
            nextStack.push(node);
            return;
        }

        this.stacks[this.currentStack].push(node);
        return;
    };

    pop(){
        if(this.stacks[this.currentStack].isEmpty()){
            this.stacks.pop();
            this.currentStack -= 1;
        }

        if(this.currentStack === -1){
            return "Empty Set of Stacks";
        }

        let topStack = this.stacks[this.currentStack];
        let val = topStack.pop();
        return val;
    };

    popAtIndex(stackIdx){
        if(stackIdx > this.currentStack){
            return "Out of Range";
        }
        return this.stacks[stackIdx].pop();
    }

    display(){
        for(let i = 0; i < this.stacks.length; i++){
            console.log(this.stacks[i]);
        }
    };

};