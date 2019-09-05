export class QueueViaArray {
    constructor() {
        this.items = [];
    };

    enqueue(element) {
        this.items.push(element);
    };

    dequeue() {
        if(this.isEmpty()) {
            return "Empty Queue";
        }
        return this.items.shift();
    };

    peek() {
        if(this.isEmpty()) {
            return "Empty Queue";
        }
        return this.items[0];
    };

    isEmpty() {
        return this.items.length === 0;
    };

    display() {
        let str = "";
        for(let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        console.log(str);
    };
};