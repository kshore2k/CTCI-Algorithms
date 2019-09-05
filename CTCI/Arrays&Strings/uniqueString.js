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

// String contains all unique characters using no other data structures (in place).
function uniqueStringInPlace(string){
    for(var i = 0; i < string.length; i++){
        var tempIndex = string.indexOf(string[i],i+1);
        if(tempIndex > -1){
            return false;
        }
    }
    return true;
};