var Customer = /** @class */ (function () {
    function Customer(first, middle, last, grade, year) {
        this._firstName = first;
        this._middleName = middle;
        this._lastName = last;
        this._myGrade = grade;
        this._myYearGraduation = year;
    }
    return Customer;
}());
var myCustomer = new Customer("Rafi", "Pramasukma", "Ekhaputera", 100, 2017);
var firstName = myCustomer._firstName;
var middleName = myCustomer._middleName;
var lastName = myCustomer._lastName;
var myGrade = myCustomer._myGrade;
var myYearGraduation = myCustomer._myYearGraduation;
console.log("".concat(firstName, " ").concat(middleName, " ").concat(lastName, " mempunyai nilai ").concat(myGrade, " maka akan lulus tahun ").concat(myYearGraduation));
// let firstName = myCustomer._firstName = "Rafi"
// let middleName = myCustomer._middleName = "Pramasukma"
// let lastName = myCustomer._lastName = "Ekhaputera"
// let myGrade = myCustomer._myGrade = 100
// let myYearGraduation = myCustomer._myYearGraduation = 2017
// console.log(`${firstName} ${middleName} ${lastName} mendapatkan nilai ${myGrade} lulus tahun ${myYearGraduation}`);
