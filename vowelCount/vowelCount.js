function vowelCount (str) {
    var vowels = str.replace(/[^aeiou]/gi, function () {
        return "";
    });

    console.log(vowels.length);
}

vowelCount("ciao sono andrews");

//solved