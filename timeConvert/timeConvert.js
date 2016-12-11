function timeConvert (num) {
    var hours = Math.floor(num/60);
    var minutes = num%60;

    console.log(hours + ":" + minutes);
}

timeConvert(63);

//solved