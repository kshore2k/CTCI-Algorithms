// Palindrome
function checkPalindrome(str){
    var regex = /[\W_]/g
    var strToLower = str.toLowerCase().replace(regex,'')
    var strReversed = strToLower.split('').reverse().join('')
    return strToLower === strReversed;
};