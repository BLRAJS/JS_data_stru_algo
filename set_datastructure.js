function Set_dataStruct() {
    this.datastorelist = [];
    this.alldata = alldata;
    this.deldt = deldt;
    this.size = size;
    this.comb = comb;
    this.inc = inc;
    this.intersect = intersect;
    this.subset = subset;
    this.diff = diff;
    this.show = show;
}

function alldata(data) {
    if (this.datastorelist.indexOf(data) < 0) {
        this.datastorelist.push(data);
        return true;
    } else {
        return false;
    }
}

function deldt(data) {
    var pos = this.datastorelist.indexOf(data);
    if (pos > -1) {
        this.datastorelist.splice(pos, 1);
        return true;
    } else {
        return false;
    }
}

function size() {
    return this.datastorelist.length;
}

function show() {
    return "[" + this.datastorelist + "]";
}

function inc(data) {
    if (this.datastorelist.indexOf(data) > -1) {
        return true;
    } else {
        return false;
    }
}

function comb(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.datastorelist.length; ++i) {
        tempSet.alldata(this.datastorelist[i]);
    }
    for (var i = 0; i < set.datastorelist.length; ++i) {
        if (!tempSet.inc(set.datastorelist[i])) {
            tempSet.datastorelist.push(set.datastorelist[i]);
        }
    }
    return tempSet;
}

function intersect(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.datastorelist.length; ++i) {
        if (set.inc(this.datastorelist[i])) {
            tempSet.alldata(this.datastorelist[i]);
        }
    }
    return tempSet;
}

function subset(set) {
    if (this.size() > set.size()) {
        return false;
    } else {
        for (var member in this.datastorelist) {
            if (!set.inc(member)) {
                return false;
            }
        }
    }
    return true;
}

function diff(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.datastorelist.length; ++i) {
        if (!set.inc(this.datastorelist[i])) {
            tempSet.alldata(this.datastorelist[i]);
        }
    }
    return tempSet;
}


// main program

var cis = new Set_dataStruct();
var it = new Set_dataStruct();
cis.alldata("bledar");
cis.alldata("ramo");
cis.alldata("Danny");
it.alldata("besnik");
it.alldata("vlas");
it.alldata("Jennifer");
var diff = new Set_dataStruct();
diff = cis.diff(it);
print(cis.show() + " diff " + it.show() + " -> " + diff.show());