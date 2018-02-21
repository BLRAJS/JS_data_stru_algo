function Bsort(elements) {
    var len = elements.length;

    do {
        for (var i = 0; i < len - 1; i++) {
            if (elements[i] > elements[i + 1]) {
                swap(elements, i, i + 1);
            }
        }
    } while (len--);

    return elements;
}

function swap_elem(arr, inA, inB) {
    var tmp = arr[inA];
    arr[inA] = arr[inB];
    arr[inB] = tmp;
}