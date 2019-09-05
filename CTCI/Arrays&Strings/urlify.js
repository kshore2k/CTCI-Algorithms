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