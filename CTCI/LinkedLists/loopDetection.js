   // Loop Detection: 
// Given a circular linked list, implement an algorithm that returns the node at the
// beginning of the loop.

// DEFINITION
// Circular linked list: A (corrupt) linked list in which a node's next pointer points to an earlier node, so as to make a loop in the linked list.

// EXAMPLE
// Input: A -> B -> C -> D -> E -> C[thesameCasearlier]
// Output: C

// Input: SLList
// Output: SLNode
// Constraints: Optimize
// Edge Cases: Node points to self?

// Pseudo : Finding a Loop
// Initialize walker and runner variables at head of list.
// While walker != null and runner != null and runner.next != null
// Traverse the list,moving walker 1 node forward at a time & runner 2 nodes(skips 1 node).
// After each move check equality of walker to runner.
// If runner === walker return either node
// Else return false

// Pseudo : Finding the Start of a Loop
// Once an intersection is found, set walker back to head of list
// While walker !== runner, incriment walker and runner each 1 node
// If walker === runner return either node. You have found the start of the loop. 

const loopDetection = (list) => {
    let walker = list.head;
    let runner = list.head;

    while(walker != null && runner != null && runner.next != null){
        walker = walker.next;
        runner = runner.next.next;

        if(walker === runner){ // loop found
            return walker;    // intersecting node
        }
    }

    return false; // no loop found
};

let findLoopStart = (list) => {
    let walker = list.head;
    let runner = loopDetection(list);

    while(walker !== runner){
        walker = walker.next;
        runner = runner.next;
    }

    return walker; // start of loop
};