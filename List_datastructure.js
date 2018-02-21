function internalNode(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
}

function data_List() {
    this.head = new internalNode("head");
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.remove = remove;
    this.findLast = findLast;
    this.rever = rever;
}

function rever() {
    var currinternalNode = this.head;
    currinternalNode = this.findLast();
    while (!(currinternalNode.previous == null)) {
        console.log(currinternalNode.element);
        currinternalNode = currinternalNode.previous;
    }
}

function findLast() {
    var currinternalNode = this.head;
    while (!(currinternalNode.next == null)) {
        currinternalNode = currinternalNode.next;
    }
    return currinternalNode;
}

function remove(item) {
    var currinternalNode = this.find(item);
    if (!(currinternalNode.next == null)) {
        currinternalNode.previous.next = currinternalNode.next;
        currinternalNode.next.previous = currinternalNode.previous;
        currinternalNode.next = null;
        currinternalNode.previous = null;
    }
}

// findPrevious is no longer needed
/*function findPrevious(item) {
   var currinternalNode = this.head;
   while (!(currinternalNode.next == null) && 
           (currinternalNode.next.element != item)) {
      currinternalNode = currinternalNode.next;
   }
   return currinternalNode;
}*/

function display() {
    var currinternalNode = this.head;
    while (!(currinternalNode.next == null)) {
        console.log(currinternalNode.next.element);
        currinternalNode = currinternalNode.next;
    }
}

function find(item) {
    var currinternalNode = this.head;
    while (currinternalNode.element != item) {
        currinternalNode = currinternalNode.next;
    }
    return currinternalNode;
}

function insert(newElement, item) {
    var newinternalNode = new internalNode(newElement);
    var current = this.find(item);
    newinternalNode.next = current.next;
    newinternalNode.previous = current;
    current.next = newinternalNode;
}


var cities = new data_List();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display();
console.log();
cities.remove("Carlisle");
cities.display();
console.log();
cities.rever();