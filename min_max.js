function findMinNum(arr) {
    var min = arr[0];
    for (var i = 1; i < arr.length; ++i) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function findMaxNum(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; ++i) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

var resmax = findMaxNum([321, 3, 213, 12, 13, 1234, 3]);
var res = findMinNum([321, 3, 213, 12, 13, 1234, 3]);
console.log(res)
console.log(resmax)