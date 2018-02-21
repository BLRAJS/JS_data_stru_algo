function isEven(num) {
    return num % 2 == 0;
}

function isOdd(num) {
    return num % 2 != 0;
}

//
var nums = [2, 4, 3, 8, , 6, 7, 11, 8, 10, 12, 18];
var even = nums.every(isEven);
// array of even o not .. true false
var even_or_not = nums.map(isEven);

console.log(even)
console.log(even_or_not)



//split array to even and odd
var evens_arr = nums.filter(isEven);
var odds_arr = nums.filter(isOdd);

console.log(evens_arr)
console.log(odds_arr)