function simpleSymbols (str) {

    var len = str.length;
    //will use length of letters and result to check if every letter respects the condition
    var letters = [];
    var result = [];
    for (var i = 0; i < len; i++) {
        //testing if it's a letter
        if (/[a-z]/gi.test(str[i])) {
            letters.push(str[i]);
            if ((str[i+1] === '+') && (str[i-1] === '+')) {
                result.push(true);
            }
        }
    }

    if (letters.length === result.length) {
        //if every letter returned true
        if(result.every(function (el) {
            return el === true;
            })) {
            return true;
        }
    }

    return false;
}

console.log(simpleSymbols("+s+t+r+k+"));

//solved

