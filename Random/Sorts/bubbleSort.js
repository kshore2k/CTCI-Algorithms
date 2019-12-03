// Bubble Sort
// Psuedo
// Set an outer loop to execute n - 1 times with n in respect to number of elements in array.
// Set an inner loop to execute n - k times with k in respect to the size of the sorted half of array.  
// In inner loop, iterate through the array, comparing each current element to the current+1 element.
// If the current element is greater than the current+1 element, swap them.
// After each iteration i of all elements, the greatest value remaining in unsorted half will have bubbled to the end of the array (sorted half),
// thus not needing to compare elements at the end of the array again on the following iterations (done so by incrimenting k).

// Time complexity : Best O(n) Average O(n^2)
// Space complexity: O(1)
// Potential use case: nearly sorted array can achieve O(n) time

// TWO LOOP IMPLEMENTATION :
// We know that the outer loop i will run n - 1 times because each loop will have sorted 1 more element and after sorting n - 1 elements the smallest element 
// will be in correct position and not need its own iteration.
const bubbleSort = (arr) => {
    let swapped;
    let k = 1;
    for (let i = 1; i < arr.length; i++) {
        swapped = false;
        for (let j = 0; j < arr.length - k; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
    
                swapped = true;
            }
        }
        if (!swapped) return arr;
        k++;
    }
    return arr;
};

// DO WHILE IMPLEMENTATION : 
// Similar as above only we check if swaps were made after each pass and we keep iterating until we get a pass where no swaps were made.
const bubbleSortDoWhile = (arr) => {
    let swapped;
    let k = 1;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - k; i++) {
            if (arr[i] > arr[i+1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;

                swapped = true;
            }
        }
        k++;
    } while (swapped)
    return arr;
};

const arr = [5,4,3,2,1];
console.log(bubbleSortDoWhile(arr)); // logs [1,2,3,4,5]

const bubz = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j+1]) {
                swapEm(arr, j, j+1);
            }
        }
    }
    return arr;
};

const swapEm = (arr, idx1, idx2) => {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
};

// console.log(bubz(arr));

