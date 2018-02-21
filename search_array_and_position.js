var my_family = ["bledar", "inchi", "besnik", "vladimir", "george", "inchi", "inchi"];
var search_term = "inchi"
var index = my_family.indexOf(search_term);
// FIRSTINDEX
if (index >= 0) {
    console.log("Found " + search_term + " at position " + index);
} else {
    console.log(search_term + " not found in array.");
}




//LASTINDEX
var lastIndex = my_family.lastIndexOf(search_term);

if (lastIndex >= 0) {
    console.log("Found " + search_term + " at position " + lastIndex);
} else {
    console.log(search_term + " not found in array.");
}