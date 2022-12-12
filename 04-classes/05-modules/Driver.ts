import { Customers } from "./Customers"

let myCustomers = new Customers("Rafi", "Pramasukma", "Ekhaputera", 100, 2017);

let firstNames = myCustomers.firstName
let middleNames = myCustomers.middleName
let lastNames = myCustomers.lastName
let myGrades = myCustomers.myGrade
let myYearGraduations = myCustomers.myYearGraduation

console.log(`${firstNames} ${middleNames} ${lastNames} mempunyai nilai ${myGrades} maka akan lulus tahun ${myYearGraduations}`);

