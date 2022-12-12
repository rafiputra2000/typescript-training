let reviews: number[] = [1, 3, 5, 6, 8]

let totalAverage: number = 0
for (let i = 0; i < reviews.length; i++){
    console.log(reviews[i]);
    totalAverage += reviews[i]
}

let logTotalAverage: number = totalAverage/reviews.length
console.log(logTotalAverage);


