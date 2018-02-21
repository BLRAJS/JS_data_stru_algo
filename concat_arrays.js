//CONCAT ARRAYS
var family_one = ["bledar", "ramo", "inxhi"];
var family_two = ["Raymond", "Cynthia", "Bryan"];
var twofamilies = family_one.concat(family_two)
console.log(twofamilies);

//different way
var allarrays = [...family_one, ...family_two];
console.log(allarrays);