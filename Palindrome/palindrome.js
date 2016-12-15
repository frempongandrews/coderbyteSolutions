function palindrome (str) {

    var reversedStr = str.split("").reverse().join("");
    console.log(reversedStr);

    if (reversedStr === str) {
        return true + "";
    } else{
        return false + "";
    }

    console.log(str);
}

console.log(palindrome("racecar"));

//solved