// Rotate Matrix
// Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, 
// write a method to rotate the image by 90 degrees. Can you do this in place?

// EXAMPLE: Clockwise
// [                [
//   [1,2,3],         [1,1,1],
//   [1,2,3],  --->   [2,2,2],
//   [1,2,3]          [3,3,3],
// ]                ]

// Input: Array
// Output: Array
// Constraints: Optimize
// Edge Cases: Empty Array, Row lengths don't match

// Time complexity: O(n)
// Space complexity: O(n)

// New Array first Row values will be first index of each input Array row starting with last row working up the column.
// New Array second Row values will be second index of each input Array row starting with last row working up the column.
// New Array third Row values will be third index of each input Array row starting with last row working up the column.
// Etc...
// Return new Array

let rotateMatrix = (arr) => {
    let newArr = [[],[],[]];
    let arrLen = arr.length;

    for(let i = 0; i < arrLen; i++){

        for(let j = arrLen - 1; j >= 0; j--){
            newArr[i].push(arr[j][i]);
        }

    }
    
    return newArr; 
};