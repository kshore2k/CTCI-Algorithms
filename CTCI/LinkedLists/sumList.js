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