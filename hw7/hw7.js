// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    return {id, name, surname, email, phone};
}

let users = [];
for (let i = 1; i <= 10; i++) {
    let user = new User(i, `user${i}`, `user${i}`, `user${i}@gmail.com`, Math.floor(Math.random() * 1000));
    // мас рандом в номері для того щоб було що сортувати в завданні 4, бо айді і так
    // в порядку зростання і буде не видно, чи сорт працює
    users.push(user);
}

console.log(users);

//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
// залишивши тільки об'єкти з парними id (filter)
let filteredUsers = users.filter(value => value.id % 2 === 0);
console.log(filteredUsers);

//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortedUsers = users.toSorted((x, y) => x.phone - y.phone);
console.log(sortedUsers);

//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        return {id, name, surname, email, phone, order}
    }
}

let clients = [];
for (let i = 1; i <= 10; i++) {
    let client = new Client(i, `client${i}`, `client${i}`, `client${i}@gmail.com`, i, Math.floor(Math.random() * 100));
    clients.push(client);
}
console.log(clients);
for (const client in clients) {
    console.log(`client ${+client + 1} order: ${clients[client].order}`);
}

//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості
// товарів в полі order по зростанню. (sort)
let sortedClients = clients.toSorted((x, y) => x.order - y.order);
console.log(sortedClients);

//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в
//     поточний об'єкт car

function Car(year, make, model, maxSpeed, engineVolume) {
    this.year = year;
    this.make = make.toUpperCase();
    this.model = model.toUpperCase();
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.driver = {};
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    this.info = function () {
        console.log(`Year: ${this.year}, make: ${this.make}, model: ${this.model}, max speed: ${this.maxSpeed}, engine volume: ${this.engineVolume}, driver: ${this.driver.name}`);
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
        console.log(`Speed increased by ${newSpeed}. Current max speed: ${this.maxSpeed}`);
    }
    this.changeYear = function (newCarYear) {
        if (newCarYear > 1900 && newCarYear <= new Date().getFullYear() && newCarYear !== this.year) {
            this.year = newCarYear;
            // штука з дейт взята звідси https://stackoverflow.com/questions/6002254/get-the-current-year-in-javascript
            console.log(`Car year changed. New car year: ${this.year}`);
        } else if (newCarYear === this.year) {
            console.log('The year you\'ve entered is already set. Try setting a different year');
        } else {
            console.log('Sorry, unable to change year. Try entering a year between 1900 and current year.');
        }
    }
}

let fordFocus2015 = new Car(2015, "ford", "focus", 120, 5);
fordFocus2015.info();
fordFocus2015.changeYear(2015);
fordFocus2015.changeYear(2024);
fordFocus2015.changeYear(1899);
fordFocus2015.info();

Car.prototype.addDriver = function (newDriver) {
    if (newDriver.hasLicence && this.driver.uniqueId !== newDriver.uniqueId) {
        this.driver = newDriver;
        console.log(`Driver set! Current driver is: ${this.driver.name}!`);
    } else if (!newDriver.hasLicence) {
        console.log(`Sorry, but ${newDriver.name} has no licence! Try assigning another person. Current driver is: ${this.driver.name}`);
    } else if (this.driver.uniqueId === newDriver.uniqueId) {
        console.log(`Sorry, ${this.driver.name} is already behind the wheel! Try assigning another person`)
    }
}

const chauffeurJohn = {
    uniqueId: 1, name: "John", hasLicence: true, yearsDrivingExp: 20, drivingLicenceCategory: "B"
}

const badChauffeurKolya = {
    uniqueId: 2, name: "Kolya", hasLicence: false, yearsDrivingExp: 0, drivingLicenceCategory: "none"
}

const anotherChauffeurNamedJohn = {
    uniqueId: 3, name: "John", hasLicence: true, yearsDrivingExp: 10, drivingLicenceCategory: "C"
}

fordFocus2015.addDriver(chauffeurJohn);
fordFocus2015.info();
fordFocus2015.addDriver(badChauffeurKolya);
fordFocus2015.addDriver(chauffeurJohn);
fordFocus2015.addDriver(anotherChauffeurNamedJohn);

//- (Те саме, тільки через клас)
//
//

class newCar {
    constructor(year, make, model, maxSpeed, engineVolume) {
        this.year = year;
        this.make = make.toUpperCase();
        this.model = model.toUpperCase();
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
        this.driver = {};
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        console.log(`Year: ${this.year}, make: ${this.make}, model: ${this.model}, max speed: ${this.maxSpeed}, engine volume: ${this.engineVolume}, driver: ${this.driver.name || 'none'}`);
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
        console.log(`Speed increased by ${newSpeed}. Current max speed: ${this.maxSpeed}`);
    }

    changeYear(newCarYear) {
        if (newCarYear > 1900 && newCarYear <= new Date().getFullYear() && newCarYear !== this.year) {
            this.year = newCarYear;
            console.log(`Car year changed. New car year: ${this.year}`);
        } else if (newCarYear === this.year) {
            console.log('The year you\'ve entered is already set. Try setting a different year');
        } else {
            console.log('Sorry, unable to change year. Try entering a year between 1900 and current year.');
        }
    }

    addDriver(newDriver) {
        if (newDriver.hasLicence && this.driver.uniqueId !== newDriver.uniqueId) {
            this.driver = newDriver;
            console.log(`Driver set! Current driver is: ${this.driver.name}!`);
        } else if (!newDriver.hasLicence) {
            console.log(`Sorry, but ${newDriver.name} has no licence! Try assigning another person. Current driver is: ${this.driver.name}`);
        } else if (this.driver.uniqueId === newDriver.uniqueId) {
            console.log(`Sorry, ${this.driver.name} is already behind the wheel! Try assigning another person`);
        }
    }
}

let toyotaTundra2009 = new newCar(2009, "toyota", "tundra", 220, 9);
toyotaTundra2009.info();
toyotaTundra2009.changeYear(2009);
toyotaTundra2009.changeYear(2024);
toyotaTundra2009.changeYear(1899);
toyotaTundra2009.info();
toyotaTundra2009.addDriver(chauffeurJohn);
toyotaTundra2009.info();
toyotaTundra2009.addDriver(badChauffeurKolya);
toyotaTundra2009.addDriver(chauffeurJohn);
toyotaTundra2009.addDriver(anotherChauffeurNamedJohn);

//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Cinderella {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

let cinderellas = [];
for (let i = 1; i <= 10; i++) {
    let newCinderella = new Cinderella(`Cinderella ${i}`, Math.floor(Math.random() * (49 - 18 + 1)) + 18, Math.floor(Math.random() * (45 - 35 + 1)) + 35);
    cinderellas.push(newCinderella);
}
console.log(cinderellas);

class Prince extends Cinderella {
    constructor(name, age, shoeHeFound) {
        super(name, age)
        {
            this.name = name;
            this.age = age;
        }
        this.shoeHeFound = shoeHeFound;
        this.match = false;
        this.cinderella = {};
    }

    getCinderella() {
        console.log(this.cinderella);
    }
}

let prince = new Prince('Prince', 29, 36);
const findMatch = (instanceOfPrince) => {
    for (const cinderella in cinderellas) {
        if (instanceOfPrince.shoeHeFound === cinderellas[cinderella].shoeSize) {
            console.log(`Yay! Todays Cinderella is: ${cinderellas[cinderella].name}!`);
            instanceOfPrince.cinderella = cinderellas[cinderella];
            instanceOfPrince.match = true;
            break;
        }
    }
    if (!instanceOfPrince.match) {
        console.log(`Sorry ${instanceOfPrince.name}, gods of random said no to you today. Refresh the page and try your luck again!`);
    }
}

findMatch(prince);
prince.getCinderella();

// Через Array.prototype. створити власний foreach, filter, map
Array.prototype.customForEach = function (callback) {
    console.log("Custom forEach start");
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
    console.log("Custom forEach end");
}

const nums = [1, 2, 3, 4, 5,];
nums.forEach(value => console.log(value));
nums.customForEach(value => console.log(value));

Array.prototype.customFilter = function (callback) {
    console.log("Custom filter start");
    let filteredArr = [];
    for (let j = 0; j < this.length; j++) {
        if (callback(this[j])) {
            filteredArr.push((this[j]));
        }
    }
    console.log("Custom filter end");
    return filteredArr;
}

console.log(nums.filter(value => value % 2 === 0));
console.log(nums.customFilter(value => value % 2 === 0));
