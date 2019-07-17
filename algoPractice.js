// Iterative Fibonacci
function iFibonacci(num){
    if(num == 0){
        return 0
    }
    if(num == 1){
        return 1
    } else {
        var num1 = 0;
        var num2 = 1;
        for(var count = 1;count < num; count++){
            var num3 = num1 + num2
            var fib = num2 + num3
            num1 = num2
            num2 = num3
        }
        return fib - num1
    }
};

// **Iterative Fibonacci Refactored
function iFibonacci(n){
    var fibs = [0,1];
    for(var i = 0; i < n; i++){
        fibs.push(fibs[0] + fibs[1])
        fibs.shift()
    }
    return fibs[0];
};

// Recursive Fibonacci
function rFibonacci(n){
    if(n == 0){
        return 0
    } else if(n == 1 || n == 2){
        return 1
    }
    return rFibonacci(n - 2) + rFibonacci(n - 1)
};

// Recursive Binary Search
function rBinarySearch(arr,val,min = 0,max = arr.length - 1){
    if(max < min){
        return false
    } else {
        mid = findMidPoint(min,max)
        if(arr[mid] < val){
            return rBinarySearch(arr,val,mid + 1,max)
        } else if(arr[mid] > val){
            return rBinarySearch(arr,val,min,mid - 1)
        } else {
            return "Value Found at Index: " + mid
        }
    }
};

function findMidPoint(min,max){
    return Math.floor((min + max) / 2)
};       

// Iterative Binary Search
function iBinarySearch(arr,val){
    var min = 0
    var max = arr.length - 1
    while(min <= max){
        mid = Math.floor((min + max) / 2)
        if(arr[mid] < val){
            min = mid + 1
        }
        else if(arr[mid] > val){
            max = mid - 1
        } else {
            return mid
        }
    }
    return false
};

// FizzBuzz
function FizzBuzz(num){
    for(var x = 1; x <= num; x++){
        if(x % 15 === 0){
            console.log('FizzBuzz')
        } else if(x % 5 === 0){
            console.log('Buzz')
        } else if(x % 3 === 0){
            console.log('Fizz')
        } else {
            console.log(x)
        }
    }
};

// FizzBuzz using Logical(short circuit) evaluation & ternary operator
function shortFizzBuzz(){
    for(let i = 0; i < 100;)console.log((++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i)
};



// #########################################################
// CRACKING THE CODING INTERVIEW
// #########################################################



// ****************STRINGS AND ARRAYS********************


// Reverse String
function reverseString(str){
    return str.split('').reverse().join('')
};

// Palindrome
function checkPalindrome(str){
    var regex = /[\W_]/g
    var strToLower = str.toLowerCase().replace(regex,'')
    var strReversed = strToLower.split('').reverse().join('')
    return strToLower === strReversed
};

// Valid Parenthesis
function validParenthesis(str){
    if(str === ""){
        return true
    } else {
        var arr = [];
        
        dict = {
            "(": ")",
            "[": "]",
            "{": "}"
        }
        
        for(var i = 0; i < str.length; i++){
            if(str[i] in dict){
                arr.push(str[i])
            } else if(str[i] === dict[arr[arr.length - 1]]){
                arr.pop()
            } else {
                return false
            }
        }
        
        if(arr.length === 0){
            return true
        } else {
            return false
        }

    }
};

// String contains all unique characters
function uniqueString(string){
    var dict = {};
    for(var i = 0; i < string.length; i++){
        if(!(string[i] in dict)){
            dict[string[i]] = 1;
        } else {
            return false;
        }
    }
    return true;
};

// String contains all unique characters using no other data structures
function uniqueStringInPlace(string){
    for(var i = 0; i < string.length; i++){
        var tempIndex = string.indexOf(string[i],i+1);
        if(tempIndex > -1){
            return false;
        }
    }
    return true;
};

// String permutation
function isPermutation(stringOne, stringTwo){
    return (stringOne.split('').sort().join('') === stringTwo.split('').sort().join(''))
};

// URLify : Convert Spaces to character for URLification
function urlify(string){
    var trimmed = string.trim();
    var newString = [];
    var spaceDetected = false;
    for(var i = 0 ; i < trimmed.length; i++){
        if(trimmed[i] != " "){
            newString.push(trimmed[i]);
            spaceDetected = false;
        } else {
            if(spaceDetected === false){
                newString.push("%20");
                spaceDetected = true;
            }
        }
    }
    return newString.join('');
};

// Palindrome permutation
function palPermutation(string){
    var dict = {};
    for(var i = 0; i < string.length; i++){
        if(!(string[i] in dict)){
            dict[string[i]] = 1;
        } else {
            dict[string[i]] += 1;
        }
    }
    var oneUnique = false;
    for(key in dict){
        if(dict[key] % 2 != 0){
            if(oneUnique === false){
                oneUnique = true;
            } else {
                return false;
            }
        }
    }
    return true;
};

// One Away
// There are three types of edits that can be performed on strings: 
// insert a character, remove a character, or replace a character. 
// Given two strings, write a function to check if they are one edit (or zero edits) away.

// EXAMPLE
// pale, ple -> true 
// pales, pale -> true 
// pale, bale -> true 
// pale, bake -> false

// I: 2 strings
// O: boolean
// C: optimize
// E: empty string

// time complexity: linear O(n)
// space complexity: constant O(1)

// If s2 is longer
// If insert, s1's current char should match s2's next char
// If remove, s1's next char should match s2's current char
// If replace, s1's next char should match s2's next char

// max edits = 1
// If difference in lengths is greater than max edits return false

// Iterate through strings at the same time checking for differences
// Store max length for forloop condition
// If difference is found, decriment edits, check if edits drops below 0, if so return false
// When forloop is done return true

let oneAway = (s1,s2) => {
    let edits = 1;
    let maxLen = Math.max(s1.length,s2.length);
    let diff = Math.abs(s1.length - s2.length);

    if(diff > edits){
        return false;
    }

    for(let i = 0, j = 0; i < maxLen || j < maxLen; i++, j++){
        let c1 = s1[i];
        let c2 = s2[j];
        if(c1 !== c2){
            edits--;
            if(edits < 0){
                return false;
            }
            if(c1 === s2[j+1]){  //inserted
                j++;
            } else if(s1[i+1] === c2){ //removed
                i++;
            }
        }
    }
    return true;
};

// console.log(
//     oneAway('pale','ple') === true, //removed
//     oneAway('pales','pale') === true, //inserted
//     oneAway('pale','bale') === true //replaced
// )

// String Compression
// Implement a method to perform basic string compression using the counts of repeated characters. 
// If the "compressed" string would not become smaller than the original string, your method should return
// the original string. You can assume the string has only uppercase and lowercase letters (a - z).

// EXAMPLE
//  aabcccccaaa -> a2b1c5a3.

// Inputs: 1 String
// Output: 1 String
// Constraints: Optimize
// Edge Cases: String has only 2 characters that are the same. Empty String.

// time complexity: linear O(n)
// space complexity: constant O(1)

// Iterate through the String using forloop
// Save characters and count of each using object/dictionary
// Add each key and value to a new string
// Return new string

let sCompression = (s) => {
    let charCount = 0;
    let compressed = "";
    for(let i = 0; i < s.length; i++){
        let char = s[i];
        charCount++;
        if(char != s[i + 1]){
            compressed += char + charCount;
            charCount = 0;
        }
    }
    if(compressed.length >= s.length || s === ""){
        return s;
    } else {
        return compressed;
    }
};

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

// String Rotation
// Assume you have a method isSubstring which checks if one word is a substring of another. 
// Given two strings, sl and s2, write code to check if s2 is a rotation of sl using only one call to isSubstring 

// EXAMPLE
// "waterbottle" is a rotation of"erbottlewat" 

// Input: 2 strings
// Output: boolean
// Constraints: optimize
// Edge Cases: string lengths dont match

// Psuedo
// Make a new string that is s2 concat s2
// call isSubstring on new string with s1 as substring to be found
// if substring is found rotation is true.Else not

// time complexity: O(n)
// space complexity: O(n)

let stringRotation = (s1,s2) => {
    if(s1.length != s2.length){
        return false;
    };

    let sChecker = s2.concat(s2);
    return sChecker.indexOf(s1) > -1;
};

// console.log(stringRotation("waterbottle","erbottlewat"))



// **************** Linked Lists ********************

class SLNode {
    constructor(val){
        this.val = val;
        this.next = null;
    }
};

class SinglyLinkedList {
    constructor(){
        this.head = null;
    };

    find(val){
        if(this.head === null){
            return "Empty List";
        } else {
            let current = this.head;
            while(current.val != val){
                current = current.next;
            }
            return current;
        }
    };

    insertNodeAtFront(newVal){
        let newNode = new SLNode(newVal);
        newNode.next = this.head;
        this.head = newNode;
    };

    insertNodeAtIndex(newVal,val){
        let newNode = new SLNode(newVal);

        if(this.head === null){
            return "Empty List";
        } else {
            let current = this.find(val);
            newNode.next = current.next;
            current.next = newNode;
        }
    };

    insertNodeAtBack(newVal){
        let newNode = new SLNode(newVal);

        if(this.head === null){
            this.head = newNode;
        } else {
            let current = this.head;
            while(current.next != null){
                current = current.next;
            }
            current.next = newNode;
        }
    };

    // Used For Intersection Algorithm
    insertNode(node){
        if(this.head === null){
            this.head = node;
        } else {
            let current = this.head;
            while(current.next != null){
                current = current.next;
            }
            current.next = node;
        };
    };

    findPrevious(val){
        let current = this.head;
        while(current.next.val != val && current.next != null){
            current = current.next;
        }
        return current;
    };

    removeNode(val){
        if(this.head.val === val){
            this.head = this.head.next;
        } else {
            let previous = this.findPrevious(val);

            if(previous.next.next != null){
                previous.next = previous.next.next;
            } else {
                previous.next = null;
            }
        }
    };

    display(){
        let current = this.head;
        while(current){
            console.log(current.val);
            current = current.next;
        }
    };

    count(){
        let current = this.head;
        let count = 0;
        while(current){
            count++;
            current = current.next;
        }
        return count;
    };



    // Remove Duplicates
// Write code to remove duplicates from an unsorted linked list.
// How would you solve this problem if a temporary buffer is not allowed?

// Input: SLList
// Output: SLList
// Constraints: Optimize
// Edge Cases: Empty List

// Pseudo
// Create Dictionary. 
// Set walker pointer to head. Set runner pointer to head.next
// Add walker val to dictionary.
// While runner exists, check if runner val is in dictionary. 
// If so set walker's next to runner's next and set runner to walker's next(removing dup node)
// If not add val to dictionary and incriment walker and runner.
// Return list when done traversing.

// Time complexity: O(n)
// Space complexity O(n)

    removeDups(){
        if(this.head === null){
            return "Empty List";
        } else {
            let dict = {};
            let walker = this.head;
            let runner = this.head.next;
            dict[walker.val] = 1;

            while(runner != null){
                if(runner.val in dict){
                    walker.next = runner.next;
                    runner = walker.next;
                } else {
                    dict[runner.val] = 1;
                    walker = walker.next;
                    runner = runner.next;
                }
            }
            return this;
        }
    };

    // Return Kth to Last
// Implement an algorithm to find the kth to last element of a singly linked list.

// Input: SLList, K(integer)
// Output: SLNode
// Constraints: Optimize
// Edge Cases: Empty list, Kth from last doesnt exist

// Pseudo
// Get count or size of list.
// Use a forloop to traverse through the list N number of times where N = count - (k - 1)
// return node

// Time complexity: O(n)
// Space complexity: O(1)

    kToLast(k){
        if(this.head === null){
            return "Empty List";
        }
        if(k > this.count()){
            return "Kth Element Out of Bounds"
        } 

        let count = this.count();
        let kTh = (count - k) + 1;
        let current = this.head;

        for(let i = 1; i < kTh; i++){
            current = current.next;
        }
        return current;
    };

    // Partition
// Write code to partition a linked list around a value x, 
// such that all nodes less than x come before all nodes greater than or equal to x. 
// If x is contained within the list, the values of x only need to be after the elements less than x (see below). 
// The partition element x can appear anywhere in the "right partition"; 
// it does not need to appear between the left and right partitions.

// EXAMPLE
// Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1[partition=5] 
// Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8

// Input: SLList
// Output: SLList
// Constraints: Optimize
// Edge Cases: Empty List, List nodes all contain same value

// Pseudo
// Create walker and runner pointers.Runner = walker.next
// Traverse list checking if values at each runner node are less than x
// If node value is less than x, move node to front of SLList
// then set runner as walker.next and continue
// return modified SLList

// Time complexity: O(n) linear
// Space complexity: O(1) constant

    partition(x){
        if(this.head === null){
            return "Empty List";
        }

        let walker = this.head;
        let runner = walker.next;

        while(runner != null){
            if(runner.val < x){
                let tail = runner.next;
                runner.next = this.head;
                this.head = runner;
                walker.next = tail;
                runner = walker.next;
            } else {
                walker = walker.next;
                runner = runner.next;
            }
        }
    };

    // Palindrome: 
// Implement a function to check if a linked list is a palindrome.

// Input: SLList
// Output: boolean
// Constraints: optimize
// Edge Cases: Empty List

// Pseudo
// Create String variable to hold list values
// Traverse List, concatenating list values
// Do palindrome check

// time complexity: O(n)
// space complexity: O(1)

    isPalindrome(){
        if(this.head === null){
            return true;
        }

        let str = "";
        let current = this.head;
        while(current){
            str += current.val;
            current = current.next;
        }

        let regex = /[\W_]/g;
        let strToLower = str.toLowerCase().replace(regex,'');
        let strReversed = strToLower.split('').reverse().join('');
        
        return (str === strReversed);
    };

};

    // Sum Lists
// You have two numbers represented by a linked list, where each node contains a single digit.
// The digits are stored in reverse order, such that the 1 's digit is at the head of the list. 
// Write a function that adds the two numbers and returns the sum as a linked list.

// EXAMPLE
// Input:(7-> 1 -> 6) + (5 -> 9 -> 2).Thatis,617 + 295. Output:2 -> 1 -> 9.That is,912.

// FOLLOW UP
// Suppose the digits are stored in forward order. Repeat the above problem. EXAMPLE
// lnput:(6 -> 1 -> 7) + (2 -> 9 -> 5).That is,617 + 295. Output:9 -> 1 -> 2.That is,912.

// Input: 2 SLList's
// Output: 1 SLList

// Pseudo
// Traverse both lists. Create a string variable for each list. Add the values from each list to its string variable.
// Reverse both strings.
// Get Ingeger value of each string. Then add the values.
// Create final string variable using the total.Reverse final string.
// Create new SLList.Iterate through the final string and add the integer values to the list.

// Time complexity: O(n)
// Space complexity: O(n)


let sumList = (sL1,sL2) => {
    let string1 = "";
    let string2 = "";

    let sL1pointer = sL1.head
    let sL2pointer = sL2.head;

    while(sL1pointer != null){
        string1 += sL1pointer.val;
        sL1pointer = sL1pointer.next;
    }

    while(sL2pointer != null){
        string2 += sL2pointer.val;
        sL2pointer = sL2pointer.next;
    }

    let string1Val = parseFloat(
        string1.split('').reverse().join('')
    );

    let string2Val = parseFloat(
        string2.split('').reverse().join('')
     );

    let total = "";
    total += string1Val + string2Val;

    let totalRev = total.split('').reverse().join('');
    
    let newList = new SinglyLinkedList();

    for(var i = 0; i < totalRev.length; i++){
        newList.insertNodeAtBack(parseFloat(totalRev[i]));
    };

    return newList;
};

    // Intersection: 
// Given two (singly) linked lists, determine if the two lists intersect. 
// Return the inter­secting node. Note that the intersection is defined based on reference, not value.
// That is, if the kth node of the first linked list is the exact same node (by reference) as the jth node of the second linked list, 
// then they are intersecting.

// Input: 2 SLLists
// Output: boolean
// Constraint: optimize
// Edge Cases: 1 List Empty, Both Lists Empty;

// Pseudo
// Check if the tails are the same node. If so there is an intersection.
// If 2 lists have the same length, traverse each and compare until you find node reference equality.
// If lists have different lengths, find the difference(x) and start longer list pointer x nodes forward.Shorter list pointer
// starts at head as usual..
// Traverse as before comparing for equality at each node.
// If equality is found return either current node
// Else return false

// Time complexity: O(n)
// Space complexity: O(1)

let intersectionRevised = (sL1,sL2) => {
    let sL1Tail = sL1.head;
    let sL2Tail = sL2.head;
// Find Tails
    while(sL1Tail.next != null){
        sL1Tail = sL1Tail.next;
    }
    while(sL2Tail.next != null){
        sL2Tail = sL2Tail.next;
    }

// If Tails Match, Lists do intersect
    if(sL1Tail === sL2Tail){

        if(sL1.count() === sL2.count()){ // if list lengths are the same traverse each list until you find node equality
            let sL1current = sL1.head;
            let sL2current = sL2.head;

            while(sL1current && sL2current){
                if(sL1current === sL2current){
                    return sL2current;
                }
                sL1current = sL1current.next;
                sL2current = sL2current.next;
            }
        } else { // lists do intersect but list lengths dont match
            let diff = Math.abs(sL1.count() - sL2.count()); // find the difference in list lengths(diff)
            
            let longerList = (sL1.count() > sL2.count()) ? sL1 : sL2; // Find longer list
            let shorterList = (longerList === sL1) ? sL2 : sL1; // And shorter list

            let longerCurrent = longerList.head;
            for(var i = 1; i <= diff; i++){  // set pointer on longer list to start (diff) nodes forward
                longerCurrent = longerCurrent.next;
            };

            let shorterCurrent = shorterList.head;

            while(longerCurrent && shorterCurrent){ // then traverse each as before and compare
                if(longerCurrent === shorterCurrent){
                    return shorterCurrent;
                }
                longerCurrent = longerCurrent.next;
                shorterCurrent = shorterCurrent.next;
            };
        }
    } else {
        return false; // no equality found
    };
};

    // Loop Detection: 
// Given a circular linked list, implement an algorithm that returns the node at the
// beginning of the loop.

// DEFINITION
// Circular linked list: A (corrupt) linked list in which a node's next pointer points to an earlier node, so as to make a loop in the linked list.

// EXAMPLE
// Input: A -> B -> C -> D -> E -> C[thesameCasearlier]
// Output: C

// Input: SLList
// Output: SLNode
// Constraints: Optimize
// Edge Cases: Node points to self?

// Pseudo : Finding a Loop
// Initialize walker and runner variables at head of list.
// While walker != null and runner != null and runner.next != null
// Traverse the list,moving walker 1 node forward at a time & runner 2 nodes(skips 1 node).
// After each move check equality of walker to runner.
// If runner === walker return either node
// Else return false

// Pseudo : Finding the Start of a Loop
// Once an intersection is found, set walker back to head of list
// While walker !== runner, incriment walker and runner each 1 node
// If walker === runner return either node. You have found the start of the loop. 

const loopDetection = (list) => {
    let walker = list.head;
    let runner = list.head;

    while(walker != null && runner != null && runner.next != null){
        walker = walker.next;
        runner = runner.next.next;

        if(walker === runner){ // loop found
            return walker;    // intersecting node
        }
    }

    return false; // no loop found
};

let findLoopStart = (list) => {
    let walker = list.head;
    let runner = loopDetection(list);

    while(walker !== runner){
        walker = walker.next;
        runner = runner.next;
    }

    return walker; // start of loop
};

// **************** Stacks & Queues ********************

//  STACK

class StackNode {
    constructor(data){
        this.data = data;
        this.next = null;
    }
};

class Stack {
    constructor(){
        this.top = null;
    };

    push(node){
        node.next = this.top;
        this.top = node;
    };

    pop(){
        if(this.top === null){
            return "Empty Stack";
        }
        let item = this.top.data;
        this.top = this.top.next;
        return item;
    };

    peek(){
        if(this.top === null){
            return "Empty Stack";
        }
        return this.top;
    };

    isEmpty(){
        return this.top === null;
    };

    size(){
        if(this.top === null){
            return 0;
        }
        let runner = this.top;
        let count = 1;
        while(runner.next != runner && runner.next != null){
            runner = runner.next;
            count++;
        }
        return count;
    };

};


// QUEUE

class QueueNode {
    constructor(data){
        this.data = data;
        this.next = null;
    };
};

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
    };

    enqueue(node){
        if(this.last !== null){
            this.last.next = node;
        }

        this.last = node;

        if(this.first === null){
            this.first = this.last;
        }
    };

    dequeue(){
        if(this.first === null){
            return "Emtpy Queue";
        }

        let item = this.first;
        this.first = this.first.next;

        if(this.first === null){
            this.last = null;
        }
        return item;
    };

    peek(){
        if(this.first === null){
            return "Empty Queue";
        }
        return this.first;
    };

    isEmpty(){
        return this.first === null;
    };
};

class QueueViaArray {
    constructor() {
        this.items = [];
    };

    enqueue(element) {
        this.items.push(element);
    };

    dequeue() {
        if(this.isEmpty()) {
            return "Empty Queue";
        }
        return this.items.shift();
    };

    peek() {
        if(this.isEmpty()) {
            return "Empty Queue";
        }
        return this.items[0];
    };

    isEmpty() {
        return this.items.length === 0;
    };

    display() {
        let str = "";
        for(let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        console.log(str);
    };
};


    // Stack of Plates: 
// Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
// Therefore, in real life, we would likely start a new stack when the previous stack exceeds some threshold. 
// Implement a data structure SetOfStacks that mimics this. 
// SetO-fStacks should be composed of several stacks and should create a new stack once the previous one exceeds capacity. 
// SetOfStacks.push() and SetOfStacks.pop() should behave identically to a single stack (that is, pop() should return the same values as it would if there were just a single stack).

// FOLLOW UP
// ImplementafunctionpopAt(int index)whichperformsapopoperationonaspecificsub-stack.

// Inputs:
// Output:
// Edge Cases:

// Time Complexity:
// Space Complexity:

class SetOfStacks {
    constructor(threshHold){
        this.stackCapacity = threshHold;
        this.stacks = [];
        this.currentStack = 0;
    };

    push(node){
        if(this.stacks.length === 0){
            let newStack = new Stack();
            this.stacks.push(newStack);
            newStack.push(node);
            return;
        }

        if(this.stacks[this.currentStack].size() === this.stackCapacity){
            this.currentStack += 1;
            let nextStack = new Stack();
            this.stacks.push(nextStack);
            nextStack.push(node);
            return;
        }

        this.stacks[this.currentStack].push(node);
        return;
    };

    pop(){
        if(this.stacks[this.currentStack].isEmpty()){
            this.stacks.pop();
            this.currentStack -= 1;
        }

        if(this.currentStack === -1){
            return "Empty Set of Stacks";
        }

        let topStack = this.stacks[this.currentStack];
        let val = topStack.pop();
        return val;
    };

    popAtIndex(stackIdx){
        if(stackIdx > this.currentStack){
            return "Out of Range";
        }
        return this.stacks[stackIdx].pop();
    }

    display(){
        for(let i = 0; i < this.stacks.length; i++){
            console.log(this.stacks[i]);
        }
    };

};

    // Queue via Stacks: 
// Implement a MyQueue class which implements a queue using two stacks.

// Time Complexity: enqueue O(1) dequeue O(n)
// Space Complexity: O(1)

// Psuedo
// For enqueue: Push x to stack1
// For dequeue: If stack2 is empty, while stack1 is not empty, push everything from stack1 to stack2.
// Pop the element on top of stack2 and save in variable.
// While stack2 is not empty, push everything from stack2 back to stack1.

class QueueViaStacks {
    constructor(){
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    };

    enqueue(node){
        this.stack1.push(node);
    };

    dequeue(){
        if(this.stack1.isEmpty() && this.stack2.isEmpty()){
            return "Queue is Empty";
        }

        // Push everything from stack1 to stack2
        if(this.stack2.isEmpty()){
            while(!this.stack1.isEmpty()){
                this.stack2.push(new StackNode(this.stack1.top.data));
                this.stack1.pop();
            }
            
        }

        // Save and Pop top of stack2
        let val = this.stack2.top.data;
        this.stack2.pop();

        // Push everything back to stack1
        while(!this.stack2.isEmpty()){
            this.stack1.push(new StackNode(this.stack2.top.data));
            this.stack2.pop();
        }

        return val;
    };

};

    // Sort Stack: 
// Write a program to sort a stack such that the smallest items are on the top. 
// You can use an additional temporary stack, but you may not copy the elements into any other data structure (such as an array). 
// The stack supports the following operations: push, pop, peek, and isEmpty.

// Psuedo
// Push first value given.
// Compare next value with stack top
// If next value is less than or equal to first stack.top or if stack.top = null ,push onto first stack. 
// While next value is greater than first stack.top or first stack.top != null, pop stack.top and push to second stack.
// Pop and push all values from second stack back to first stack

// time complexity: O(n)
// space complexity: O(1)

class sortedStack {
    constructor() {
        this.top = null;
        this.container = new Stack();
    };

    push(node) {
        if(this.isEmpty()) {
            this.top = node;
            return;
        }
        if(node.data <= this.top.data) {
            node.next = this.top;
            this.top = node;
            return;
        } else {
            while(!this.isEmpty() && node.data > this.top.data) {
                let popped = this.pop();
                this.container.push(new StackNode(popped));
            }
            this.push(node);
            while(!this.container.isEmpty()) {
                let popped = this.container.pop();
                this.push(new StackNode(popped));
            }
            return;
        }
    };

    pop() {
        if(this.top === null) {
            return "Empty Stack";
        }
        let node = this.top.data;
        this.top = this.top.next;
        return node;
    };

    peek() {
        if(this.top === null) {
            return "Empty Stack";
        }
        return this.top.data;
    };

    isEmpty() {
        return this.top === null;
    };

    display() {
        let current = this.top;
        while(current != null) {
            console.log(current.data);
            current = current.next;
        }
    };
};

    // Animal Shelter: 
// An animal shelter, which holds only dogs and cats, operates on a strictly "first in, first out" basis. 
// People must adopt either the "oldest" (based on arrival time) of all animals at the shelter, or they can select whether they would prefer a dog or a cat (and will receive the oldest animal of that type). 
// They cannot select which specific animal they would like. 
// Create the data structures to maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog, and dequeueCat. 
// You may use the built-in Linked list data structure.

// Pseudo
// Two queues. One for dogs, one for cats, and one array for both.
// When new animal comes in , enqueue to proper queue, and push reference to array.
// When one animal leaves,if type is given, loop through array to find the first of its type and splice it out. Then dequeue from proper type queue.
// If type not given, shift array and dequeue from proper type queue.

class AnimalShelter {
    constructor() {
        this.dogQueue = new Queue();
        this.catQueue = new Queue();
        this.animals = [];
    };

    enqueue(animal) {
        let newAnimal = animal;

        if(animal.data[0] === "dog") {
            this.dogQueue.enqueue(animal);
        }
        if(animal.data[0] === "cat") {
            this.catQueue.enqueue(animal);
        }

        this.animals.push(newAnimal);
        return;
    };

    dequeueDog() {
        if(this.dogQueue.isEmpty()) {
            return "No more Dogs";
        }

        let i = 0;
        while(this.animals[i].data[0] !== "dog") {
            i++;
        }

        this.animals.splice(i,1);
        this.dogQueue.dequeue();
        return;
    };

    dequeueCat() {
        if(this.catQueue.isEmpty()) {
            return "No more Cats";
        }

        let i = 0;
        while(this.animals[i].data[0] !== "cat") {
            i++;
        }

        this.animals.splice(i,1);
        this.catQueue.dequeue();
        return;
    };

    dequeuAny() {
        if(this.animals.length < 1) {
            return "No more animals";
        }

        let type = this.animals[0].data[0];
        this.animals.shift();

        if(type === "dog") {
            this.dogQueue.dequeue;
            return;
        }
        if(type === "cat") {
            this.catQueue.dequeue();
            return;
        }
    };
};

//***************  GRAPHS  *********************

// in Directed (vs undirected) paths are one-way street
class DirectedGraph { 
    constructor(numOfVertices) {
        this.numOfVertices = numOfVertices;
        this.adjList = new Map();
    };

    // initialize the adjacent list with a 
    // null array 
    addVertex(v) {
        this.adjList.set(v, []);
    };

    // add edge(path) between src and dest.
    // get the list for vertex v and put the vertex w denoting edge between v and w
    addEdge(v, w) {
        this.adjList.get(v).push(w);
    };

    printGraph() {
        const get_keys = this.adjList.keys(); // get all the vertices (nodes)

        for(let i of get_keys) { // iterate over the vertices (nodes)

            let get_values = this.adjList.get(i); // get the corresponding adjacency list for the vertex
            let conc = "";

            for(let j of get_values) { // iterate over the adjacency list & concatenate values into a string
                conc += j + " ";
            }

            console.log(i + " -> " + conc); // print the vertex and its adjacency list
        }
    };

    //breadth first search
    bfs(startingNode) {
        let visited = []; // create visited array
        for(let i = 0; i < this.numOfVertices; i++){
            visited[i] = false;
        }

        let q = new QueueViaArray(); // create queue

        visited[startingNode] = true; // add startingNode to the queue
        q.enqueue(startingNode);

        while(!q.isEmpty()) { // loop until queue is empty
            let getQueueElement = q.dequeue(); // get the element from the queue

            console.log(getQueueElement);

            let get_List = this.adjList.get(getQueueElement); // get the adjacent list for the current vertex (node)

            for(let i in get_List) {  // loop through the list and add the element to the  
                let neigbor = get_List[i]; // queue if it is not processed yet

                if(!visited[neigbor]) {
                    visited[neigbor] = true;
                    q.enqueue(neigbor);
                }
            }
        }
    };

    //dfs
};

// const graph = new DirectedGraph(6);
// let vertices = ['A','B','C','D','E','F'];

// for(let i = 0; i < vertices.length; i++) {
//     graph.addVertex(vertices[i]);
// }

// Route Between Nodes: 
// Given a directed graph, design an algorithm to find out whether there is a route between two nodes.


// ******************  TREES ************************

class BSTNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    };
};

class BST {
    constructor() {
        this.root = null;
    };

    insert(data) {
        let newNode = new BSTNode(data);

        if(this.root == null){
            this.root = newNode;
            return;
        }
        
        let current = this.root;
        
        while(true){
            if(data > current.data){
                if(!current.right){ 
                    current.right = newNode; 
                    break; 
                }
            current = current.right;

            } else if(data < current.data){
                if(!current.left){ 
                    current.left = newNode; 
                    break; 
                }
            current = current.left;

            } else {
                break;
            }
        };
    };

    // BREADTH FIRST SEARCH
    searchLevelOrder(root) {
        if(root === null) {
            return;
        }

        let q = new Queue();
        q.enqueue(new QueueNode(root));

        while(!q.isEmpty()) {
            let current = q.peek().data;
            console.log(current.data);

            if(current.left != null) {
                q.enqueue(new QueueNode(current.left));
            }
            if(current.right != null) {
                q.enqueue(new QueueNode(current.right));
            }

            q.dequeue();
        }
        return;
    };

    // DEPTH FIRST SEARCHES
    searchInOrder(node) {
        if(node === null) {
            return;
        }
        this.searchInOrder(node.left);
        console.log(node.data);
        this.searchInOrder(node.right);
    };

    searchPreOrder(node) {
        if(node === null) {
            return;
        }
        console.log(node.data);
        this.searchPreOrder(node.left);
        this.searchPreOrder(node.right);
    }

    searchPostOrder(node) {
        if(node === null) {
            return;
        }
        this.searchPostOrder(node.left);
        this.searchPostOrder(node.right);
        console.log(node.data);
    }
};


    // Minimal Tree: 
// Given a sorted (increasing order) array with unique integer elements, 
// write an algo­rithm to create a binary search tree with minimal height.

const makeBinaryTreeMinimalHeight = (sortedArray, startIndex = 0, endIndex = sortedArray.length - 1)  => {
  
    let midPoint = Math.floor((endIndex - startIndex) / 2 + startIndex);
    let currentNode = new Node(sortedArray[midPoint]);

    if (startIndex > endIndex) {
      return null;
    }
    
    currentNode.left = makeBinaryTreeMinimalHeight(sortedArray, startIndex, midPoint - 1);
    currentNode.right = makeBinaryTreeMinimalHeight(sortedArray, midPoint + 1, endIndex);
    return currentNode;

};

    // List of Depths: 
// Given a binary tree, design an algorithm which creates a linked list of all the nodes
// at each depth (e.g., if you have a tree with depth D, you'll have D linked lists).

const listOfDepths = (root) => {
    if(root === null) {
        return;
    }
    let map = new Map();
    let level = 1;
    map.set(level,[]);

    let q = new Queue();
    q.enqueue(new QueueNode(root));

    while(!q.isEmpty()) {
        let current = q.peek().data;
        map.get(level).push(current.data);
        console.log(`Pushing ${current.data} at level ${level}`);

        if(current.left != null) {
            q.enqueue(new QueueNode(current.left));
        }
        if(current.right != null) {
            q.enqueue(new QueueNode(current.right));
        }

        q.dequeue();

        // ?????
        if(q.peek().data == current.right || q.peek().data == current.left) {
            level++;
            map.set(level,[]);
        }
    }
    return;
};

    // Tree Mirror:
// Given a binary tree, check whether that trees subtrees or mirrors of each other.

//RECURSIVE time: O(n) Space: O(1)
const isSymmetric = (root) => {
    if (!root) { // Sanity check
        return true;
    }

    // Check if tree s & t are mirroring each other
    function isMirror(s, t) {
        if (!s && !t) {
            return true; // Both nodes are null, ok
        }
        if (!s || !t || s.data !== t.data) {
            return false; // Found a mismatch
        }
        // Compare the left subtree of `s` with the right subtree of `t`
        // and the right subtree of `s` with the left subtree of `t`
        return isMirror(s.left, t.right) && isMirror(s.right, t.left);
    }

    return isMirror(root.left, root.right);
};

//ITERATIVE time: O(n) Space: O(1)
const isMirror = (p, q) => {
    // Create two stacks
    let s1 = [p], s2 = [q];

    // Perform preorder traversal
    while (s1.length > 0 || s2.length > 0) {
        let n1 = s1.pop(), n2 = s2.pop();

        // Two null nodes, let's continue
        if (!n1 && !n2) continue;

        // Return false as long as there is a mismatch
        if (!n1 || !n2 || n1.val !== n2.val) return false;

        // Scan tree s from left to right
        // and scan tree t from right to left
        s1.push(n1.left); s1.push(n1.right);
        s2.push(n2.right); s2.push(n2.left);
    }

    return true;
};

    // Check Balanced: 
// Implement a function to check if a binary tree is balanced. 
// For the purposes of this question, a balanced tree is defined to be a tree such that 
// the heights of the two subtrees of any node never differ by more than one.

// pseudo:
// traverse the tree and get heights of left and right sub trees. 
// If height difference is greater than 1 return false.
// recurse on left and right nodes.

// time complexity: O(N log N)
// space complexity: O(N)

const getHeight = (root) => {
    if(root === null) return -1;

    return (Math.max(getHeight(root.left), getHeight(root.right)) + 1);
};

const isBalancedBST = (root) => {
    if(root === null) return true;

    let heightDifference = Math.abs(getHeight(root.left) - getHeight(root.right));

    if(heightDifference > 1) return false;
    else {
        return isBalancedBST(root.left) && isBalancedBST(root.right);
    }
};

    // Validate BST: 
// 

// pseudo:

const isBST = (root, min = null, max = null) => {
    if(max !== null && root.data > max) return false;
    if(min !== null && root.data < min) return false;

    if(root.left && !isBST(root.left, min, root.data)) return false;
    if(root.right && !isBST(root.right, root.data, max)) return false;

    return true;
};


    // Successor: 
// Write an algorithm to find the "next" node (i.e., in-order successor) of a given node in a binary search tree. 
// *You may assume that each node has a link to its parent.

// case 1: Node has a right subtree
// Sucessor will be left most node of right subtree (min of right subtree)

// case 2: Node does not have right subtree
// Successor will be first ancestor at which given node is in left subtree

// Time complexity: O(log N) space complexity: O(n)

const inOrderSuccessor = (node) => {
    // case 1
    if(node.right) {
        node = node.right;
        while(node.left) {
            node = node.left;
        }
        return node;
    }
    // case 2
    let current = node;
    let parent = node.parent;
    while(parent && parent.left !== current) {
        current = parent; //climb up
        parent = parent.parent;
    }
    return parent;
}; 








