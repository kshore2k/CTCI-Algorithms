export class SLNode {
    constructor(val){
        this.val = val;
        this.next = null;
    }
};

export class SinglyLinkedList {
    constructor(){
        this.head = null;
    };

    find(val){
        if(this.head === null){
            return "Empty List";
        } else {
            let current = this.head;
            while(current.val != val){
                current = current.next;
            }
            return current;
        }
    };

    insertNodeAtFront(newVal){
        let newNode = new SLNode(newVal);
        newNode.next = this.head;
        this.head = newNode;
    };

    insertNodeAtIndex(newVal,val){
        let newNode = new SLNode(newVal);

        if(this.head === null){
            return "Empty List";
        } else {
            let current = this.find(val);
            newNode.next = current.next;
            current.next = newNode;
        }
    };

    insertNodeAtBack(newVal){
        let newNode = new SLNode(newVal);

        if(this.head === null){
            this.head = newNode;
        } else {
            let current = this.head;
            while(current.next != null){
                current = current.next;
            }
            current.next = newNode;
        }
    };

    // Used For Intersection Algorithm
    insertNode(node){
        if(this.head === null){
            this.head = node;
        } else {
            let current = this.head;
            while(current.next != null){
                current = current.next;
            }
            current.next = node;
        };
    };

    findPrevious(val){
        let current = this.head;
        while(current.next.val != val && current.next != null){
            current = current.next;
        }
        return current;
    };

    removeNode(val){
        if(this.head.val === val){
            this.head = this.head.next;
        } else {
            let previous = this.findPrevious(val);

            if(previous.next.next != null){
                previous.next = previous.next.next;
            } else {
                previous.next = null;
            }
        }
    };

    display(){
        let current = this.head;
        while(current){
            console.log(current.val);
            current = current.next;
        }
    };

    count(){
        let current = this.head;
        let count = 0;
        while(current){
            count++;
            current = current.next;
        }
        return count;
    };

    // Remove Duplicates
// Write code to remove duplicates from an unsorted linked list.
// How would you solve this problem if a temporary buffer is not allowed?

// Input: SLList
// Output: SLList
// Constraints: Optimize
// Edge Cases: Empty List

// Pseudo
// Create Dictionary. 
// Set walker pointer to head. Set runner pointer to head.next
// Add walker val to dictionary.
// While runner exists, check if runner val is in dictionary. 
// If so set walker's next to runner's next and set runner to walker's next(removing dup node)
// If not add val to dictionary and incriment walker and runner.
// Return list when done traversing.

// Time complexity: O(n)
// Space complexity O(n)

    removeDups(){
        if(this.head === null){
            return "Empty List";
        } else {
            let dict = {};
            let walker = this.head;
            let runner = this.head.next;
            dict[walker.val] = 1;

            while(runner != null){
                if(runner.val in dict){
                    walker.next = runner.next;
                    runner = walker.next;
                } else {
                    dict[runner.val] = 1;
                    walker = walker.next;
                    runner = runner.next;
                }
            }
            return this;
        }
    };

// Return Kth to Last
// Implement an algorithm to find the kth to last element of a singly linked list.

// Input: SLList, K(integer)
// Output: SLNode
// Constraints: Optimize
// Edge Cases: Empty list, Kth from last doesnt exist

// Pseudo
// Get count or size of list.
// Use a forloop to traverse through the list N number of times where N = count - (k - 1)
// return node

// Time complexity: O(n)
// Space complexity: O(1)

    kToLast(k){
        if(this.head === null){
            return "Empty List";
        }
        if(k > this.count()){
            return "Kth Element Out of Bounds"
        } 

        let count = this.count();
        let kTh = (count - k) + 1;
        let current = this.head;

        for(let i = 1; i < kTh; i++){
            current = current.next;
        }
        return current;
    };

// Partition
// Write code to partition a linked list around a value x, 
// such that all nodes less than x come before all nodes greater than or equal to x. 
// If x is contained within the list, the values of x only need to be after the elements less than x (see below). 
// The partition element x can appear anywhere in the "right partition"; 
// it does not need to appear between the left and right partitions.

// EXAMPLE
// Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1[partition=5] 
// Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8

// Input: SLList
// Output: SLList
// Constraints: Optimize
// Edge Cases: Empty List, List nodes all contain same value

// Pseudo
// Create walker and runner pointers.Runner = walker.next
// Traverse list checking if values at each runner node are less than x
// If node value is less than x, move node to front of SLList
// then set runner as walker.next and continue
// return modified SLList

// Time complexity: O(n) linear
// Space complexity: O(1) constant

    partition(x){
        if(this.head === null){
            return "Empty List";
        }

        let walker = this.head;
        let runner = walker.next;

        while(runner != null){
            if(runner.val < x){
                let tail = runner.next;
                runner.next = this.head;
                this.head = runner;
                walker.next = tail;
                runner = walker.next;
            } else {
                walker = walker.next;
                runner = runner.next;
            }
        }
    };

    // Palindrome: 
    // Implement a function to check if a linked list is a palindrome.

    // Input: SLList
    // Output: boolean
    // Constraints: optimize
    // Edge Cases: Empty List

    // Pseudo
    // Create String variable to hold list values
    // Traverse List, concatenating list values
    // Do palindrome check

    // time complexity: O(n)
    // space complexity: O(1)

    isPalindrome(){
        if(this.head === null){
            return true;
        }

        let str = "";
        let current = this.head;
        while(current){
            str += current.val;
            current = current.next;
        }

        let regex = /[\W_]/g;
        let strToLower = str.toLowerCase().replace(regex,'');
        let strReversed = strToLower.split('').reverse().join('');
        
        return (str === strReversed);
    };

};