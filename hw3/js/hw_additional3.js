//- Створити масив з 10 числових елементів.
// Вивести в консоль всі його елементи в циклі.
let arrayOfNums = [];
for (let i = 0; i < 10; i++) {
    arrayOfNums[arrayOfNums.length] = i + 1;
    console.log(arrayOfNums[i])
}

// - Створити масив з 10 строкрових елементів.
// Вивести в консоль всі його елементи в циклі.
let arrayOfStr = [];
for (let i = 0; i < 10; i++) {
    arrayOfStr[arrayOfStr.length] = `i am a string ${i + 1}`;
    console.log(arrayOfStr[i])
}

// - Створити масив з 10 елементів будь-якого типу.
// Вивести в консоль всі його елементи в циклі.
let mixedArray = [];
for (let i = 0; i < 10; i++) {
    let random = Math.floor(Math.random() * 100);
    if (random >= 0 && random < 25) {
        mixedArray[mixedArray.length] = `i am a string ${i + 1}`;
    } else if (random > 25 && random <= 50) {
        mixedArray[mixedArray.length] = i + 1;
    } else if (random > 50 && random <= 75) {
        mixedArray[mixedArray.length] = random % 2 === 0;
    } else if (random > 75 && random <= 100) {
        mixedArray[mixedArray.length] = random % 2 ? undefined : null;
    }
    console.log(mixedArray[i])
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
let mixedArrayTwo = [];
for (let i = 0; i < 10; i++) {
    let random = Math.floor(Math.random() * 10);
    if (random >= 0 && random <= 2) {
        mixedArrayTwo[mixedArrayTwo.length] = `i am a string ${i + 1}`;
    } else if (random >= 3 && random <= 6) {
        mixedArrayTwo[mixedArrayTwo.length] = i + 1;
    } else if (random > 6 && random <= 9) {
        mixedArrayTwo[mixedArrayTwo.length] = random % 2 === 0;
    }
}

// За допомогою if та typeof вивести тільки булеві елементи
for (const mixedArrayTwoElement of mixedArrayTwo) {
    if (typeof mixedArrayTwoElement === 'boolean') {
        console.log(mixedArrayTwoElement);
    }
}

// За допомогою if та typeof вивести тільки числові елементи
for (const mixedArrayTwoElement of mixedArrayTwo) {
    if (typeof mixedArrayTwoElement === 'number') {
        console.log(mixedArrayTwoElement);
    }
}

// За допомогою if та typeof вивести тільки рядкові елементи
for (const mixedArrayTwoElement of mixedArrayTwo) {
    if (typeof mixedArrayTwoElement === 'string') {
        console.log(mixedArrayTwoElement);
    }
}
