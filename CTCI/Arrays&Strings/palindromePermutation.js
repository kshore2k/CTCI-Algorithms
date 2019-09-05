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