//return back initials from array of string
function initials() {
    var initials = [];
    for (var i = 0; i < arguments.length; i++) {
        initials.push(arguments[i][0]);
    }
    return initials;
}

var initials_list = new initials("John", "Quincy", "aPublic", "malakas", 32);
console.log("initials " + initials_list);