export class StackNode {
    constructor(data){
        this.data = data;
        this.next = null;
    }
};

export class Stack {
    constructor(){
        this.top = null;
    };

    push(node){
        node.next = this.top;
        this.top = node;
    };

    pop(){
        if(this.top === null){
            return "Empty Stack";
        }
        let item = this.top.data;
        this.top = this.top.next;
        return item;
    };

    peek(){
        if(this.top === null){
            return "Empty Stack";
        }
        return this.top;
    };

    isEmpty(){
        return this.top === null;
    };

    size(){
        if(this.top === null){
            return 0;
        }
        let runner = this.top;
        let count = 1;
        while(runner.next != runner && runner.next != null){
            runner = runner.next;
            count++;
        }
        return count;
    };

};
