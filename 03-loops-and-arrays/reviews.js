var reviews = [1, 3, 5, 6, 8];
var totalAverage = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    totalAverage += reviews[i];
}
var logTotalAverage = totalAverage / reviews.length;
console.log(logTotalAverage);
