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