"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customers = void 0;
class Customers {
    constructor(_firstName, _middleName, _lastName, _myGrade, _myYearGraduation) {
        this._firstName = _firstName;
        this._middleName = _middleName;
        this._lastName = _lastName;
        this._myGrade = _myGrade;
        this._myYearGraduation = _myYearGraduation;
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
exports.Customers = Customers;
// let firstName = myCustomer._firstName = "Rafi"
// let middleName = myCustomer._middleName = "Pramasukma"
// let lastName = myCustomer._lastName = "Ekhaputera"
// let myGrade = myCustomer._myGrade = 100
// let myYearGraduation = myCustomer._myYearGraduation = 2017
// console.log(`${firstName} ${middleName} ${lastName} mendapatkan nilai ${myGrade} lulus tahun ${myYearGraduation}`);
