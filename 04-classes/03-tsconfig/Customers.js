"use strict";
class Customers {
    constructor(first, middle, last, grade, year) {
        this._firstName = first;
        this._middleName = middle;
        this._lastName = last;
        this._myGrade = grade;
        this._myYearGraduation = year;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get middleName() {
        return this._middleName;
    }
    set middleName(value) {
        this._middleName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
    get myGrade() {
        return this._myGrade;
    }
    set myGrade(value) {
        this._myGrade = value;
    }
    get myYearGraduation() {
        return this._myYearGraduation;
    }
    set myYearGraduation(value) {
        this._myYearGraduation = value;
    }
}
let myCustomers = new Customers("Rafi", "Pramasukma", "Ekhaputera", 100, 2017);
let firstNames = myCustomers.firstName;
let middleNames = myCustomers.middleName;
let lastNames = myCustomers.lastName;
let myGrades = myCustomers.myGrade;
let myYearGraduations = myCustomers.myYearGraduation;
console.log(`${firstNames} ${middleNames} ${lastNames} mempunyai nilai ${myGrades} maka akan lulus tahun ${myYearGraduations}`);
// let firstName = myCustomer._firstName = "Rafi"
// let middleName = myCustomer._middleName = "Pramasukma"
// let lastName = myCustomer._lastName = "Ekhaputera"
// let myGrade = myCustomer._myGrade = 100
// let myYearGraduation = myCustomer._myYearGraduation = 2017
// console.log(`${firstName} ${middleName} ${lastName} mendapatkan nilai ${myGrade} lulus tahun ${myYearGraduation}`);
