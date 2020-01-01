// MAX BINARY HEAP
// In a max binary heap, each parent node is always larger than it's child nodes. The reverse is true for a min binary heap.
// Heaps are always filled from left to right which prevents an un-balanced heap.
// Useful for sorting, and implementing other data structures like Priority Queues.

// Example:
//              41
//            /    \
//          29      33
//         /  \    /  
//       18   27  12   

// Time Complexities:  Insertion & Removal Best/Avg/Worst O(log n) 
//                     Searching Best O(log n) Avg/Worst O(n)


// To find the left and right children from given Parent in Heap using array:
// Take current index of Parent -> Left Child is (index * 2) + 1
                                // Right Child is (index * 2) + 2

// To find the Parent of a given child in Heap using array: 
// Take current index of Child -> Parent is is Math.floor((index - 1) / 2)

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    };

    // Insert pseudo: 

    // Push new val onto end
    // While parent index is in bounds, check if new val(current index) is greater than parent
    // If new val is greater than parent, swap them. Then set current index to parent index you just swapped to
    // If at any time the current value is <= parent value, current is in correct order, break out of loop


    insert(val) {                                                       // Add to End
        this.values.push(val);
        let currIdx = this.values.length - 1;
        
        while (currIdx > 0) {                                           // While Parent exists
            let parentIdx = Math.floor((currIdx - 1) / 2);              // Find Parent index

            if (this.values[currIdx] <= this.values[parentIdx]) break;  // If Current is Less or Equal to Parent.. break

            this.swap(currIdx, parentIdx);                              // Otherwise swap Current with Parent
            currIdx = parentIdx;                                        // Set Current index to Parent index
        }

        return this;
    };

    // ExtractMax pseudo:
    
    // Swap first and last values
    // Pop off new last value and save in a variable max
    // While the current element(at index 0) is not beyond the bounds of possible parents, find each child index
    // If there are valid children indexes, check if either child values are larger than the parent(current)
    // If either child value is larger than the current, swap current val with the larger child val
    // Set current index to the child index you just swapped with
    // If there are no children or if no children value is larger than current, break out of the loop
    // Return the max saved at the beginning

    extractMax() {
        this.swap(0, this.values.length-1);
        const max = this.values.pop();
        let currIdx = 0;

        while (currIdx <= Math.floor((this.values.length-2) / 2)) { // While at a Valid Parent
            let left = currIdx*2 + 1;
            let right = left + 1;

            if (left > this.values.length - 1) break;           // If No More Children.. Break

            if (right > this.values.length - 1) {               // If No Right Child
                if (this.values[currIdx] < this.values[left]) { // If Left is Greater than Current.. Swap
                    this.swap(currIdx, left);
                    currIdx = left;
                } else break;                                   // Else Left is Not Greater than Current.. Break
            } else {                                            // Both Children Available
                if (this.values[left] > this.values[currIdx] && // If Left is Bigger than Right and Bigger Than Current.. Swap
                    this.values[left] > this.values[right]) {
                        this.swap(currIdx, left);
                        currIdx = left;
                        continue;
                } else if (this.values[right] > this.values[currIdx] && // If Right is Bigger than Left and Bigger Than Current.. Swap
                    this.values[right] > this.values[left]) {
                        this.swap(currIdx, right);
                        currIdx = right;
                        continue;
                } else break;                                   // No Swaps
            }
        }
        return max;
    };

    // ALTERNATE
    extractMax() {
        const max = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;

            let currIdx = 0;
            const length = this.values.length;
            const element = this.values[0];
            while (true) {
                let leftChildIdx = currIdx * 2 + 1;
                let rightChildIdx = currIdx * 2 + 2;
                let leftChild, rightChild;
                let swapIdx = null;

                if (leftChildIdx < length) {
                    leftChild = this.values[leftChildIdx];
                    if (leftChild > element) {
                        swapIdx = leftChildIdx;
                    }
                }
                if (rightChildIdx < length) {
                    rightChild = this.values[rightChildIdx];
                    if (rightChild > leftChild && rightChild > element) {
                        swapIdx = rightChildIdx;
                    }
                }
                if (!swapIdx) break;
                this.swap(currIdx, swapIdx);
                currIdx = swapIdx;
            }
        }
        return max;
    };

    swap(idx1, idx2) {
        let temp = this.values[idx1];
        this.values[idx1] = this.values[idx2];
        this.values[idx2] = temp;
    };

    display() {
        let log = "";
        for (let val of this.values) {
            log += val + " -> ";
        }
        console.log(log);
    };
};

let heap = new MaxBinaryHeap();

