class Customers {

    constructor(
        private _firstName: string, 
        private _middleName: string, 
        private _lastName: string, 
        private _myGrade: number, 
        private _myYearGraduation: number
        ) {}

    get firstName(){
        return this._firstName;
    }

    set firstName(value: string){
        this._firstName = value;
    }

    get middleName(){
        return this._middleName;
    }

    set middleName(value: string){
        this._middleName = value
    }

    get lastName(){
        return this._lastName;
    }

    set lastName(value: string){
        this._lastName = value;
    }

    get myGrade(){
        return this._myGrade;
    }

    set myGrade(value: number){
        this._myGrade = value;
    }

    get myYearGraduation(){
        return this._myYearGraduation;
    }

    set myYearGraduation(value: number){
        this._myYearGraduation = value
    }

}

let myCustomers = new Customers("Rafi", "Pramasukma", "Ekhaputera", 100, 2017);

let firstNames = myCustomers.firstName
let middleNames = myCustomers.middleName
let lastNames = myCustomers.lastName
let myGrades = myCustomers.myGrade
let myYearGraduations = myCustomers.myYearGraduation

console.log(`${firstNames} ${middleNames} ${lastNames} mempunyai nilai ${myGrades} maka akan lulus tahun ${myYearGraduations}`);


// let firstName = myCustomer._firstName = "Rafi"
// let middleName = myCustomer._middleName = "Pramasukma"
// let lastName = myCustomer._lastName = "Ekhaputera"
// let myGrade = myCustomer._myGrade = 100
// let myYearGraduation = myCustomer._myYearGraduation = 2017

// console.log(`${firstName} ${middleName} ${lastName} mendapatkan nilai ${myGrade} lulus tahun ${myYearGraduation}`);


