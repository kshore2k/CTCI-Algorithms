// String permutation
function isPermutation(stringOne, stringTwo){
    return (stringOne.split('').sort().join('') === stringTwo.split('').sort().join(''));
};