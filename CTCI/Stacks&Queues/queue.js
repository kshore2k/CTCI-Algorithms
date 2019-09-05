export class QueueNode {
    constructor(data){
        this.data = data;
        this.next = null;
    };
};

export class Queue {
    constructor(){
        this.first = null;
        this.last = null;
    };

    enqueue(node){
        if(this.last !== null){
            this.last.next = node;
        }

        this.last = node;

        if(this.first === null){
            this.first = this.last;
        }
    };

    dequeue(){
        if(this.first === null){
            return "Emtpy Queue";
        }

        let item = this.first;
        this.first = this.first.next;

        if(this.first === null){
            this.last = null;
        }
        return item;
    };

    peek(){
        if(this.first === null){
            return "Empty Queue";
        }
        return this.first;
    };

    isEmpty(){
        return this.first === null;
    };
};