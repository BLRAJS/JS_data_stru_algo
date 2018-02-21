function DictionaryAlgorithm() {
    this.add = add;
    this.alldata = new Array();
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
    this.count = count;
    this.clear = clear;
}

function add(key, value) {
    this.alldata[key] = value;
}

function find(key) {
    return this.alldata[key];
}

function remove(key) {
    delete this.alldata[key];
}

function showAll() {
    for (var key in Object.keys(this.alldata).sort()) {
        console.log(key + " -> " + this.alldata[key]);
    }
}

function count() {
    var n = 0;
    for (var key in Object.keys(this.alldata)) {
        ++n;
    }
    return n;
}

function clear() {
    for (var key in Object.keys(this.alldata)) {
        delete this.alldata[key];
    }
}


var pbook = new DictionaryAlgorithm();
pbook.add("Bledar", "123");
pbook.add("Besnik", "345");
pbook.showAll();