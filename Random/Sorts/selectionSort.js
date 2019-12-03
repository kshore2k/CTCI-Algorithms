// psuedo
// Select the Minimum and Swap to Front
// Iteratate/loop through the array. At each iteration i, set the minimumValueIndex to i. Iterate while i < arr.length - 1.
// In an inner loop, set j to i+1.
// Compare arr[j] to arr[minimumValueIndex].
// If arr[j] < arr[minimumValueIndex] , set minimumValueIndex to j;
// After inner loop completes, if minimumValueIndex does NOT still equal i, swap arr[i] with arr[minimumValueIndex].
// Continue until outer loop has finished, then return the array.

// Time: Best/Worst/Average O(n^2) Space: O(1)
// Potential use case: If you want less swaps than bubble sort, or only want 1 swap per value/n swaps...still O(n^2) time

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            swap(arr, i, minIndex);
        }
    }
    return arr;
};

const swap = (arr, idx1, idx2) => {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
};

let arr = [5,4,3,2,1];

console.log(selectionSort(arr));