function exOh (str) {
    var xs = str.replace(/[^o]/gi, function (char) {
        return "";
    });

    var xCount = xs.length;

    var os = str.replace(/[^x]/gi, function (char) {
        return "";
    });

    var oCount = os.length;

    var result = xCount === oCount ? true : false;

    console.log(result);
}

exOh("xoxoxoxooxoxx"); //false
exOh("xoxoxoxo"); //true

//solved