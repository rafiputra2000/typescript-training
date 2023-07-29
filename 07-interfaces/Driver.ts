import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";


let myGolfCoach = new GolfCoach();
let myCricketCoach = new CricketCoach();

//empty array for coach
let arrayCoach: Coach[] = [];

arrayCoach.push(myGolfCoach);
arrayCoach.push(myCricketCoach);

console.log(arrayCoach);

for (let array of arrayCoach) {
    console.log(array.getDailyWorkout());
}


