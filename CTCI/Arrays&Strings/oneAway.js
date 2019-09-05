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