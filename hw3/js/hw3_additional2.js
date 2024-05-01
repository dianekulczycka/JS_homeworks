let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
console.log(arr);

console.log("Перебрати масив циклом while:")
let n = 0;
while (n < arr.length) {
    console.log(arr[n]);
    n++;
}

console.log("Перебрати масив циклом for:");
for (let m = 0; m < arr.length; m++) {
    console.log(arr[m]);
}

console.log("Перебрати масив циклом while та вивести числа тільки з непарним індексом:");
let o = 1;
while (o < arr.length) {
    console.log(arr[o]);
    o += 2;
}

console.log("Перебрати масив циклом for та вивести числа тільки з непарним індексом:");
for (let a = 1; a < arr.length; a += 2) {
    console.log(arr[a]);
}

console.log("Перебрати масив циклом while та вивести числа тільки з парними значеннями:");
let c = 0;
while (c < arr.length) {
    if (arr[c] % 2 === 0) {
        console.log(arr[c]);
    }
    c++;
}

console.log("Перебрати масив циклом for та вивести числа тільки з парними значеннями:");
for (let d = 0; d < arr.length; d++) {
    if (arr[d] % 2 === 0) {
        console.log(arr[d]);
    }
}

console.log("Замінити кожне число кратне 3 на слово \"okten\":");
for (let e = 0; e < arr.length; e++) {
    if (arr[e] % 3 === 0) {
        arr[e] = "okten";
    }
}
console.log(arr);

console.log("Зворотній цикл for:");
for (let f = arr.length - 1; f >= 0; f--) {
    console.log(arr[f]);
}

console.log("Зворотній цикл while:");
let g = arr.length - 1;
while (g >= 0) {
    console.log(arr[g]);
    g--;
}
