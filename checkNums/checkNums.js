function checkNums (num1, num2) {
    //num2>num1 ---> true else false
    //if equal ---> -1

    if (num2 > num1) {
        return true
    } else if (num2 < num1) {
        return false;
    }

    return '-1';
}

console.log(checkNums(2,2));
console.log(checkNums(5,2));
console.log(checkNums(3,7));

//solved