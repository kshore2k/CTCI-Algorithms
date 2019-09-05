// Zero Matrix 
// Write an algorithm such that if an element in an MxN matrix is 0, 
// its entire row and column are set to 0.

// EXAMPLE:
// [                [
//   [1,2,3],         [1,0,3],
//   [1,0,3],  --->   [0,0,0],
//   [1,2,3]          [3,0,3],
// ]                ]

// Input: Array
// Output: Array
// Constraints: Optimize
// Edge Cases: Empty Array

// Traverse Matrix, if you find a 0, push coordinates x,y to map Array
// Iterate through Map Array, for each x coordinate, loop through arr[x] and set values to 0;
// For each y coordinate, loop through all array rows and set arr[..][y] to 0
// return array

// Time complexity: O(n)
// Space complexity: O(n)

let zeroMatrix = (arr) => {
    let arrLen = arr.length;
    let mapArr = [];

    // Traverse arr Matrix
    for(let i = 0; i < arrLen; i++){

        let rowLen = arr[i].length;
        
        for(let j = 0; j < rowLen; j++){
            
            if(arr[i][j] === 0){
                mapArr.push([i,j]);
            }

        }

    }
    
    // Iterate through map Array
    let mapLen = mapArr.length;
    for(let k = 0; k < mapLen; k++){

        let rowToBeZero = mapArr[k][0]; // x coordinate (row containing 0)
        let rowToBeZerodLen = arr[rowToBeZero].length
        let columnToBeZero = mapArr[k][1]; // y coordinate (column containing 0)

        for(let q = 0; q < rowToBeZerodLen; q++){ // Loop through arr[x] and set all values to 0
            arr[rowToBeZero][q] = 0;
        }

        for(let h = 0; h < arrLen; h++){
            arr[h][columnToBeZero] = 0; // Loop through all rows setting each column value at given y to 0
        }

    }
    return arr;
};

// console.log(
//     zeroMatrix(
//         [
//             [1,2,3],
//             [1,0,3],
//             [1,2,3]
//         ]
//     )
// )