function Hashtablehash() {
    this.tablehash = new Array(137);
    this.simpleHash = simpleHash;
    this.betterHash = betterHash;
    this.shDist = shDist;
    this.send = send;
    this.get = get;
}

/*function send(data) {
   var pos = this.simpleHash(data);
   this.tablehash[pos] = data;
}*/


// send for linear probing
function send(key, data) {
    var pos = this.betterHash(key);
    if (this.tablehash[pos] == undefined) {
        this.tablehash[pos] = key;
        this.values[pos] = data;
    } else {
        while (this.tablehash[pos] != undefined) {
            pos++;
        }
        this.tablehash[pos] = key;
        this.values[pos] = data;
    }
}

// send for separate chaining
function send(key, data) {
    var pos = this.betterHash(key);
    var index = 0;
    if (this.tablehash[pos][index] == undefined) {
        this.tablehash[pos][index] = data;
    } else {
        while (this.tablehash[pos][index] != undefined) {
            ++index;
        }
        this.tablehash[pos][index] = data;
    }
}

function simpleHash(data) {
    var total = 0;
    for (var i = 0; i < data.length; ++i) {
        total += data.charCodeAt(i);
    }
    print("Hash value: " + data + " -> " + total);
    return total % this.tablehash.length;
}

function betterHash(string) {
    const H = 37;
    var total = 0;
    for (var i = 0; i < string.length; ++i) {
        total += H * total + string.charCodeAt(i);
    }
    total = total % this.tablehash.length;
    if (total < 0) {
        total += this.tablehash.length - 1;
    }
    return parseInt(total);
}

function shDist() {
    var n = 0;
    for (var i = 0; i < this.tablehash.length; ++i) {
        if (this.tablehash[i] != undefined) {
            print(i + ": " + this.tablehash[i]);
        }
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function genStuData(arr) {
    for (var i = 0; i < arr.length; ++i) {
        var num = "";
        for (var j = 1; j <= 9; ++j) {
            num += Math.floor(Math.random() * 10);
        }
        num += getRandomInt(50, 100);
        arr[i] = num;
    }
}

function buildChains(arr) {
    for (var i = 0; i < arr.length; ++i) {
        arr[i] = new Array();
    }
}

function inHash(key, arr) {
    var hash = simpleHash(key, arr);
    var n = 0;
    if (key == arr[hash][n]) {
        return true;
    } else {
        while (arr[hash][n] != undefined) {
            if (arr[hash][n] == key) {
                return true;
            }
            ++n;
        }
    }
    return false;
}

// get for separate chaining
function get(key) {
    var index = 0;
    var hash = this.betterHash(key);
    if (this.tablehash[pos][index] = key) {
        return this.tablehash[pos][index + 1];
    }
    //index += 2;
    else {
        while (this.tablehash[pos][index] != key) {
            index += 2;
        }
        return this.tablehash[pos][index + 1];
    }
    return undefined;
}

// get for linear probing
function get(key) {
    var hash = -1;
    hash = this.betterHash(key);
    if (hash > -1) {
        for (var i = hash; this.tablehash[hash] != undefined; i++) {
            if (this.tablehash[hash] == key) {
                return this.values[hash];
            }
        }
    }
    return undefined;
}

function get(key) {
    return this.tablehash[this.betterHash(key)];
}



var htablehash = new Hashtablehash();
htablehash.buildChains();
var nameslist = ["fsdf", "dfsdfs", "fsdf", "ewrwer",
    "bledar", "rwer", "wer", "werwe", "rwerwe"
];
for (var i = 0; i < nameslist.length; ++i) {
    htablehash.send(nameslist[i]);
}
htablehash.shDist();