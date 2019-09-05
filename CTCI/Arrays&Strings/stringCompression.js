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