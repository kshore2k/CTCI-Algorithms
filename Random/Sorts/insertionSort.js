// Pseudo
// Consider the first element in the array as the sorted half.
// Starting at the second element, iterate and check if second element(current),
// is not greater than or equal to the last element in the sorted half, iterate(loop) 
// through the sorted half and find the proper place for current and insert into array.
// After each iteration , sorted half size is incrimented by one and so is the index of the next element to be checked.

// Possible use case: Sorting live or dynamic array where values are being added while we are sorting
// Time: Best O(n) Worst/Average O(n^2) Space: O(1)

// *Using .splice()
const insertionSort = (arr) => {
    let sorted = 1;                                 // consider first element as sorted portion
    for (let i = 1; i < arr.length; i++) {
        if (!(arr[i] >= arr[sorted-1])) {           // found element out of place
            for (let j = 0; j < sorted; j++) {      // iterate through sorted portion
                if (arr[i] < arr[j]) {              // found an element in sorted portion that is larger than current element
                    let valToInsert = arr[i];
                    arr.splice(i, 1);               
                    arr.splice(j, 0, valToInsert);  // save current element's value, remove, then insert in proper position
                    break;
                }
            }
        }
        sorted++;                                   // incriment sorted portion size
    }
    return arr;
}

const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        let j;
        for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

let myArr = [15, 3, 12, 99, -4, 43];

console.log(insertionSort(myArr));