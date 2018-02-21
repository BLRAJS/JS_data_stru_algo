function bSearch(listaray, elem) {
    while (true) {
        var mid = parseInt(listaray.length / 2, 10);

        if (elem === listaray[mid]) {
            return listaray[mid];
        } else if (elem > listaray[mid]) {
            listaray = listaray.slice(mid);
        } else if (elem < listaray[mid]) {
            listaray = listaray.slice(0, mid);
        }

        if (mid === 0) {
            if (elem === listaray[0]) {
                return listaray[0];
            }
            return null;
        }
    }
}

var list = [];
for (var i = 0; i < 100000; i++) {
    list.push(i);
}

var val = Math.random() * 10000 | 0;

match = bSearch(list, val);