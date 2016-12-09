function longestWord (sen) {
    //assume sen will not be empty
   var longest = "";
   var senArr = sen.split(" ");
   var len = senArr.length;

   for (var i = 0; i < len; i++) {

       var word = senArr[i];
       // console.log(word);
      // console.log(word.length);
       if (word.length > longest.length) {
           longest = word;
       }
   }
    console.log(longest);

}

longestWord("Hello there my name is Andrews");

//solved