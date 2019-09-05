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