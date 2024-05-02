// Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю,
// виведіть 'Вірно', інакше виведіть 'Невірно'.
let firstX = Number(prompt("Enter a number (not necessary int):"));
let answer = firstX !== 0;
console.log(answer);

//  Перевірте скрипт при a, що дорівнює 1, 0, -3
let arrayOfXs = [1, 0, -3];
if (arrayOfXs[0] !== 0) {
    console.log("True");
} else {
    console.log("False");
}
if (arrayOfXs[1] !== 0) {
    console.log("True");
} else {
    console.log("False");
}
if (arrayOfXs[2] !== 0) {
    console.log("True");
} else {
    console.log("False");
}

//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код,
// який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = Number(prompt("Enter an int between 0 and 59:"));

if (time > 0 && time <= 14) {
    console.log("First quarter");
} else if (time > 14 && time <= 29) {
    console.log("Second quarter");
} else if (time > 29 && time <= 44) {
    console.log("Third quarter");
} else if (time > 45 && time <= 59) {
    console.log("Fourth quarter");
} else {
    console.log("Not a number!");
}

// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).
let day = Number(prompt("Enter an int between 1 and 31:"));

if (day > 0 && day <= 10) {
    console.log("First decade");
} else if (day > 10 && day <= 20) {
    console.log("Second decade");
} else if (day > 20 && day <= 31) {
    console.log("Third decade");
} else {
    console.log("Not a number!");
}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить
// порядковий номер дня тижня і на екрані відображається інфа що заплановано
// на цей день (можна замість плану на день, назву дня англійською).
let dayOfWeek = Number(prompt("Enter day of week (int from 1 to 7): "));

switch (dayOfWeek) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("No such option :(");
        break;
}

//- Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
let numberOne = Number(prompt("Enter a number: "));
let numberTwo = Number(prompt("Enter a second number: "));

if (numberOne > numberTwo) {
    console.log(numberOne);
} else if (numberOne < numberTwo) {
    console.log(numberTwo);
} else if (numberOne === numberTwo) {
    console.log(`Numbers are even! ${numberOne}`);
} else {
    console.log("Not a number!");
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null
// і тд включно).
// Напишіть код який, буде присвоювати змінній х значення "default"
//  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні,
//  тобто ті, які приводиться до false, а це 0 null undefined і тд).
let secondX;
secondX = secondX || "default";

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log("Super!");
}

if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log("Super!");
}

if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log("Super!");
}

if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log("Super!");
}

if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log("Super!");
}

if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log("Super!");
}