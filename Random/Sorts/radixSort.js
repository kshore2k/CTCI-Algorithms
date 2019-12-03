// Radix Sort

// Psuedo:
// Check each digit of each number from right to left... 
// for each digit found, push number into bucket (array) for corresponding digit.
// Unpack each bucket from left to right back into a single array. Set nums to the unpacked array.
// Repeat 1 time for the number of digits in the largest number in the original array.

// Time: Best/Averate/Worst O(nk) Space: O(n + k)
// n = length of array & k = number of digits(average)

// *****************Helper Functions********************

// returns digit of a num at given position i
const getDigit = (num, i) => {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

// returns number of digits in given num
const digitCount = (num) => {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
};

// returns maximum digit count of any element in given array of numbers nums
const mostDigits = (nums) => {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
};

// *******************************************************

const radixSort = (nums) => {
    let passes = mostDigits(nums);                          // number of sorts = number of digits in largest number in array
    for (let i = 0; i < passes; i++) {
        let buckets = Array.from({length: 10}, () => []);   // create array of buckets (arrays) for 0-9... 10 total

        for (let j = 0; j < nums.length; j++) {             // loop over each number in nums
            let digit = getDigit(nums[j], i);               // get the digit at the current place going right to left i.e. 1's place(0), 10's place(1) etc..
            buckets[digit].push(nums[j]);                   // place the number in its corresponding bucket
        }

        nums = [].concat(...buckets);                       // reset nums to be all buckets concatenated back to single array
    }
    return nums;
};

let nums = [23, 1, 19, 99, 45, 6];
console.log(radixSort(nums));

