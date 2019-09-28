// MergeSort

// Divide the array in half, then recurse on each half until all you are left with two arrays with a single element each.
// Then call the merge function which sorts and merges the two small arrays.
const mergeSort = (arr) => {
    if (arr.length < 2) return arr;

    let mid = Math.floor(arr.length/2);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid);

    return (
        merge(mergeSort(left), mergeSort(right))
    );
}

// For each bottom up return from recursing, you will have two small sorted arrays.
// This merge function iterates through each array and pushes the values from smallest to largest 
// into a new array then returns the new array; 
const merge = (left, right) => {
    let sorted = [];
    let i = 0, j= 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
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

let test = [5,4,3,2,1];

console.log(test); // [5,4,3,2,1]
console.log(mergeSort(test)); // [1,2,3,4,5]