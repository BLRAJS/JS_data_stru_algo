function locasshin(wx, wy, m, n) {

    if (m == 0 || n == 0) {
        return 0;
    }

    if (wx[m - 1] == wordY[n - 1]) {
        return 1 + locasshin(worx, wordY, m - 1, n - 1);
    } else {
        var a = locasshin(worx, wordY, m, n - 1),
            b = locasshin(worx, wordY, m - 1, n);
        return (a > b) ? a : b;
    }
}

var worx = 'acbaed',
    wordY = 'abcadf';

console.log(locasshin(worx, wordY, worx.length, wordY.length));