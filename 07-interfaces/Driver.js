"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CricketCoach_1 = require("./CricketCoach");
var GolfCoach_1 = require("./GolfCoach");
var myGolfCoach = new GolfCoach_1.GolfCoach();
var myCricketCoach = new CricketCoach_1.CricketCoach();
//empty array for coach
var arrayCoach = [];
arrayCoach.push(myGolfCoach);
arrayCoach.push(myCricketCoach);
console.log(arrayCoach);
for (var _i = 0, arrayCoach_1 = arrayCoach; _i < arrayCoach_1.length; _i++) {
    var array = arrayCoach_1[_i];
    console.log(array.getDailyWorkout());
}
console.log(('B' + 'A' + 'N' + 'A' + 'N' + 'A').toLowerCase());
