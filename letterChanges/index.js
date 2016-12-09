function letterChanges (str) {
    //following letter in alphabet
    var strLower = str.toLowerCase();
    //console.log(strLower);
    var len = strLower.length;
    var strArr = [];
    var nextChar = "";
    for (var i = 0; i < len; i++) {

        // console.log(String.fromCharCode(strLower[i].charCodeAt(0)));
        nextChar = String.fromCharCode(strLower[i].charCodeAt(0) + 1);

        if (strLower[i] === " ") {
            nextChar = " ";
        }

        if (strLower[i] === "z") {
            nextChar = "a";
        }

        console.log(nextChar);
        strArr.push(nextChar);

    }

    //console.log(strArr.join(""));

    var word = strArr.join("");

    //capitalize every vowel in resulted string

    var wordCap = word.replace(/[aeiou]/gi, function (vow) {
        return vow.toUpperCase();
    });

    console.log(wordCap);



}

letterChanges("gdx bhzn");

//solved