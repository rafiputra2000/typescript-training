var sports = ["sepak bola", "bulu tangkis", "berenang", "panahan"];
// for old 
for (var i = 0; i < sports.length; i++) {
    console.log("sports for primitive", sports[i]);
}
//for new
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var sport = sports_1[_i];
    console.log("sports for new way", sport);
}
//for new with logic 
for (var _a = 0, sports_2 = sports; _a < sports_2.length; _a++) {
    var sport = sports_2[_a];
    // console.log("sports for new way", sport);
    if (sport === "berenang") {
        console.log(sport + "<< My Favorite");
    }
    else {
        console.log(sport);
    }
}
