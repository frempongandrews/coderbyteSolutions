function letterCapitalize(str) {
    var words = str.split(" ");
    //console.log(words);
    var len = words.length;
    var result = [];
    for (var i = 0; i < len; i++) {
        var singleWord = words[i];
        var singleWordCap = singleWord[0].toUpperCase() + singleWord.slice(1);
        result.push(singleWordCap);
    }

    console.log(result.join(" "));
}

letterCapitalize("Hi there i am andrews");

//solved