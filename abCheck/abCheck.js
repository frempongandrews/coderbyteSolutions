function abCheck (str) {
    var len = str.length;
    for (var i = 0; i < len; i++) {
        var char = str[i];
        if (char === "a") {
            if (str[i+4] === "b") {
                console.log("true");
            }
        }
    }

    console.log("false");
}

abCheck("lane borrowed");

//solved