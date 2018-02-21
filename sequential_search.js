function sequentialSearch(arr, data) {
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] == data) {
            return i;
        }
    }
    return -1;
}




var res = sequentialSearch(["ball", "bill", "mall", "gall"], "bill")
console.log(res)