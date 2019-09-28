// Time Complexity: Worst O(n^2) Average O(nlogn)
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

let a = [4,2,12,3,7];
console.log(`Unsorted: ${a}`); // [4,2,12,3,7]
console.log(`Sorted: ${quickSort(a)}`); // [2,3,4,7,12]