// QuickSort

// Pseudo:
// Choose a pivot point and move all lesser value elements to the left side of the pivot 
// and all greater value elements to the right side of the pivot.
// Then recurse on the left side and the right side.

// Time Complexity: Worst O(n^2) Best/Average O(n log n)
// Space Complextiy: O(1) constant

const quickSort = (arr, start = 0, end = arr.length-1) => {
    if (start < end) {
        let pivot = arr[end];
        let pivotIndex;

        for (let i = 0, j = 0; j < end; j++) {
            if (arr[j] < pivot) {
                swap(arr, j, i);
                i++;
            }
            pivotIndex = i;
        }

        swap(arr, pivotIndex, end);
        quickSort(arr, start, pivotIndex-1);
        quickSort(arr, pivotIndex+1, end);
    }

    return arr;
};

const swap = (arr, a , b) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
};

// *** USING PIVOT HELPER FUNCTION

const pivot = (arr, start = 0, end = arr.length - 1) => {
    let pivot = arr[start];
    let swapIdx = start;
    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < pivot) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if (left < right) {
        let pivotIdx = pivot(arr, left, right);
        quickSort(arr, left, pivotIdx-1);
        quickSort(arr, pivotIdx+1, right);
    }
    return arr;
};

let a = [4,2,12,3,7];
console.log(`Unsorted: ${a}`); // [4,2,12,3,7]
console.log(`Sorted: ${quickSort(a)}`); // [2,3,4,7,12]