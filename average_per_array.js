var salary_per_company = [
    [3489, 3377, 4578],
    [176, 382, 4481],
    [1391, 9414, 1389, 2198, 2266, 2312]
];
var total = 0;
var average;
for (var row = 0; row < salary_per_company.length; ++row) {
    for (var col = 0; col < salary_per_company[row].length; ++col) {
        total += salary_per_company[row][col];
    }
    average = total / salary_per_company[row].length;
    console.log("Company " + parseInt(row + 1) + " average: " +
        average.toFixed(2));
    total = 0;
    average = 0.0;
}