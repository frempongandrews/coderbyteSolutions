function firstFactorial (num) {
    var factorial = 1;
    if (num === 0) {

        console.log(factorial);
    }

    for (var i = num; i >= 1; i--) {

        factorial *= i;
    }

    console.log(factorial);
}

firstFactorial(5); //120
firstFactorial(8); //40320

//solved