class Customer {

    _firstName: string;
    _middleName: string;
    _lastName: string;
    _myGrade: number;
    _myYearGraduation: Number;

    constructor(first: string, middle: string, last: string, grade: number, year: number) {
        this._firstName = first;
        this._middleName = middle;
        this._lastName = last;
        this._myGrade = grade;
        this._myYearGraduation = year;

    }

}

let myCustomer = new Customer("Rafi", "Pramasukma", "Ekhaputera", 100, 2017);

let firstName = myCustomer._firstName
let middleName = myCustomer._middleName
let lastName = myCustomer._lastName
let myGrade = myCustomer._myGrade
let myYearGraduation = myCustomer._myYearGraduation

console.log(`${firstName} ${middleName} ${lastName} mempunyai nilai ${myGrade} maka akan lulus tahun ${myYearGraduation}`);


// let firstName = myCustomer._firstName = "Rafi"
// let middleName = myCustomer._middleName = "Pramasukma"
// let lastName = myCustomer._lastName = "Ekhaputera"
// let myGrade = myCustomer._myGrade = 100
// let myYearGraduation = myCustomer._myYearGraduation = 2017

// console.log(`${firstName} ${middleName} ${lastName} mendapatkan nilai ${myGrade} lulus tahun ${myYearGraduation}`);


