// Animal Shelter: 
// An animal shelter, which holds only dogs and cats, operates on a strictly "first in, first out" basis. 
// People must adopt either the "oldest" (based on arrival time) of all animals at the shelter, or they can select whether they would prefer a dog or a cat (and will receive the oldest animal of that type). 
// They cannot select which specific animal they would like. 
// Create the data structures to maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog, and dequeueCat. 
// You may use the built-in Linked list data structure.

// Pseudo
// Two queues. One for dogs, one for cats, and one array for both.
// When new animal comes in , enqueue to proper queue, and push reference to array.
// When one animal leaves,if type is given, loop through array to find the first of its type and splice it out. Then dequeue from proper type queue.
// If type not given, shift array and dequeue from proper type queue.

class AnimalShelter {
    constructor() {
        this.dogQueue = new Queue();
        this.catQueue = new Queue();
        this.animals = [];
    };

    enqueue(animal) {
        let newAnimal = animal;

        if(animal.data[0] === "dog") {
            this.dogQueue.enqueue(animal);
        }
        if(animal.data[0] === "cat") {
            this.catQueue.enqueue(animal);
        }

        this.animals.push(newAnimal);
        return;
    };

    dequeueDog() {
        if(this.dogQueue.isEmpty()) {
            return "No more Dogs";
        }

        let i = 0;
        while(this.animals[i].data[0] !== "dog") {
            i++;
        }

        this.animals.splice(i,1);
        this.dogQueue.dequeue();
        return;
    };

    dequeueCat() {
        if(this.catQueue.isEmpty()) {
            return "No more Cats";
        }

        let i = 0;
        while(this.animals[i].data[0] !== "cat") {
            i++;
        }

        this.animals.splice(i,1);
        this.catQueue.dequeue();
        return;
    };

    dequeuAny() {
        if(this.animals.length < 1) {
            return "No more animals";
        }

        let type = this.animals[0].data[0];
        this.animals.shift();

        if(type === "dog") {
            this.dogQueue.dequeue;
            return;
        }
        if(type === "cat") {
            this.catQueue.dequeue();
            return;
        }
    };
};