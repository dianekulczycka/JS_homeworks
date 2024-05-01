// --створити масив з:
// - з 5 числових значень
let arrayOfNums = [];
for (let i = 1; i <= 5; i++) {
    arrayOfNums[arrayOfNums.length] = i;
}

// - з 5 стічкових значень
let arrayOfStrings = [];
for (let j = 1; j <= 5; j++) {
    arrayOfStrings[arrayOfStrings.length] = `item ${j}`;
}

// - з 5 значень стрічкового, числового та булевого типу
let randomArray = [];
for (let k = 1; k <= 5; k++) {
    let random = Math.random() * 10;
    if (random <= 3) {
        randomArray[randomArray.length] = `i am a string ${k}`;
    } else if (k > 3 && k <= 7) {
        randomArray[randomArray.length] = k;
    } else {
        randomArray[randomArray.length] = k % 2 === 0;
        // інтелідж не давав пушнути поки я не замінила код нижче на тернарний вираз
        // if (k % 2 === 0) {
        //    randomArray[randomArray.length] = true;
        // } else {
        //    randomArray[randomArray.length] = false;
        // }
    }
}
// - та вивести його в консоль
console.log(randomArray);