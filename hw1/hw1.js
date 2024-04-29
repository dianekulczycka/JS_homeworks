// - Створити змінні. Присвоїти кожному з них значення:
// 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.

let firstString = 'hello';
let secondString = 'owu';
let thirdString = 'com';
let fourthString = 'ua';

let firstNum = 1;
let secondNum = 10;
let thirdNum = -999;
let fourthNum = 123;
let fifthNum = 3.14;
let sixthNum = 2.7;
let seventhNum = 16;

let firstBool = true;
let secondBool = false;

// Вивести кожну змінну за допомогою: console.log

console.log(firstString);
console.log(secondString);
console.log(thirdString);
console.log(fourthString);
console.log(firstNum);
console.log(secondNum);
console.log(thirdNum);
console.log(fourthNum);
console.log(fifthNum);
console.log(sixthNum);
console.log(seventhNum);
console.log(firstBool);
console.log(secondBool);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
// З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Diana';
let middleName = 'Olga';
let lastName = 'Kulchytska';
let person = firstName + '-' + middleName + ' ' + lastName;
console.log(person); // Diana-Olga Kulchytska

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;

console.log(typeof a); // number
console.log(typeof b); // string
console.log(typeof c); // boolean

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими
// Імям, По-Батькові та роками. та вивести в консоль

let userFirstName = prompt("Enter your name: ");
let userMiddleName = prompt("Enter your middle name: ");
let userAge = prompt("Enter your age: ");

console.log(`User's full name is ${userFirstName} ${userMiddleName} and user supposedly is ${userAge} years old.`);
