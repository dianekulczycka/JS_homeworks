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
    let random = Math.floor(Math.random() * 10);
    if (random >= 0 && random <= 2) {
        randomArray[randomArray.length] = `i am a string ${k}`;
    } else if (random >= 3 && random <= 6) {
        randomArray[randomArray.length] = k;
    } else if (random > 6 && random <= 9) {
        randomArray[randomArray.length] = random % 2 === 0;
    }
}
// - та вивести його в консоль
console.log(randomArray);