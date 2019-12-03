// MergeSort -> DIVIDE & CONQUER
// Pseudo:
// Divide the array in half, then recurse on each half until all you are left with two arrays with a single element each.
// Then call the merge function which sorts and merges the two small arrays.

// Time: Best/Worst/Average O(n log n) Space: O(n)
// Breakdown: O(log n) for splitting & O(n) for merging
// Potential use cases: time consistency...merge sort will always run in (n log n) time

// Input: Unsorted Array [4,1,6,0,9,3]
// Output: Sorted Array [0,1,3,4,6,9]

const mergeSort = (arr) => {
    if (arr.length < 2) return arr;

    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
};

// For each bottom up return from recursing, you will have two small sorted arrays.
// This merge function iterates through each array and pushes the values from smallest to largest 
// into a new array then returns the new array; 
const merge = (left, right) => {
    let sorted = [];
    let i = 0, j= 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sorted.push(left[i]);
            i++;
        } else {
            sorted.push(right[j]);
            j++;
        }
    }
    while (i < left.length) {
        sorted.push(left[i]);
        i++;
    }
    while (j < right.length) {
        sorted.push(right[j]);
        j++;
    }

    return sorted;
};

let test = [3,5,1,7,4];

console.log(mergeSort(test)); // -> [1,3,4,5,7]

