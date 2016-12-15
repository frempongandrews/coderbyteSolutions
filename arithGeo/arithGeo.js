function arithGeo(arr) {
    var aritArr = [];
    var geoArr = [];
    var len = arr.length;

    for (var i = 1; i < len; i++) {
        //getting the difference between all values
        //if same ---> Arithmetic
        var difference = arr[i] - arr[i - 1];
        aritArr.push(difference);

        //getting division between all values
        //if same ---> Geometric
        var divi = arr[i] / arr[i - 1];
        geoArr.push(divi);
    }

    //function that checks if all values are same
    Array.prototype.allSameValues = function () {
        var ln = this.length;
        for (var j = 0; j < ln; j++) {
            if (this[j] !== this[0]) {
                return false;
            }
        }
        return true;
    }


    if (aritArr.allSameValues()) {
        console.log("Arithmetic");
    }
    if (geoArr.allSameValues()) {
        console.log("Geometric");
    }

    if (!aritArr.allSameValues() && !geoArr.allSameValues()) {
        console.log(-1);
    }

}

arithGeo([2, 4, 6, 8]);
arithGeo([2, 6, 18, 54]);
arithGeo([1, 2, 3, 4]);
arithGeo([1, 5, 9]);


//solved