var Customers = /** @class */ (function () {
    function Customers(first, middle, last, grade, year) {
        this._firstName = first;
        this._middleName = middle;
        this._lastName = last;
        this._myGrade = grade;
        this._myYearGraduation = year;
    }
    Object.defineProperty(Customers.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customers.prototype, "middleName", {
        get: function () {
            return this._middleName;
        },
        set: function (value) {
            this._middleName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customers.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customers.prototype, "myGrade", {
        get: function () {
            return this._myGrade;
        },
        set: function (value) {
            this._myGrade = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customers.prototype, "myYearGraduation", {
        get: function () {
            return this._myYearGraduation;
        },
        set: function (value) {
            this._myYearGraduation = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customers;
}());
var myCustomers = new Customers("Rafi", "Pramasukma", "Ekhaputera", 100, 2017);
var firstNames = myCustomers.firstName;
var middleNames = myCustomers.middleName;
var lastNames = myCustomers.lastName;
var myGrades = myCustomers.myGrade;
var myYearGraduations = myCustomers.myYearGraduation;
console.log("".concat(firstNames, " ").concat(middleNames, " ").concat(lastNames, " mempunyai nilai ").concat(myGrades, " maka akan lulus tahun ").concat(myYearGraduations));
// let firstName = myCustomer._firstName = "Rafi"
// let middleName = myCustomer._middleName = "Pramasukma"
// let lastName = myCustomer._lastName = "Ekhaputera"
// let myGrade = myCustomer._myGrade = 100
// let myYearGraduation = myCustomer._myYearGraduation = 2017
// console.log(`${firstName} ${middleName} ${lastName} mendapatkan nilai ${myGrade} lulus tahun ${myYearGraduation}`);
