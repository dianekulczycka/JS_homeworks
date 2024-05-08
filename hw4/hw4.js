// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function square(a, b) {
    if (a > 0 && b > 0) {
        return a * b;
    }
    return NaN;
}

console.log(square(2, 5));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circleSquare(r) {
    if (r > 0) {
        return r ** 2 * Math.PI;
    }
    return NaN;
}

console.log(circleSquare(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinderVolume(r, h) {
    if (r > 0 && h > 0) {
        return r ** 2 * Math.PI * h; //сорі шо душню, але в циліндра шукається об'єм) площа в переріза або в основи
    }
    return NaN;
}

console.log(cylinderVolume(2, 3));

// - створити функцію яка приймає масив та виводить кожен його елемент
function looper(array) {
    for (const item of array) {
        console.log(item);
    }
}

looper([1, 2, true, undefined, "hello", ""]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraphCreator(innerText) {
    if (innerText) {
        document.write(`<p>${innerText}</p>`);
    }
}

paragraphCreator('Hello');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulCreator(innerText) {
    if (innerText) {
        document.write("<ul>");
        for (let i = 0; i < 3; i++) {
            document.write(`<li>${innerText}</li>`);
        }
        document.write("</ul>");
    }
}

ulCreator("List n1");
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ulCreatorTwo(innerText, liCount) {
    if (liCount > 0) {
        document.write("<ul>");
        for (let i = 1; i <= liCount; i++) {
            document.write(`<li>${innerText}</li>`);
        }
        document.write("</ul>");
    }
}

ulCreatorTwo("List n2", 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function ulCreatorForArrays(liArray) {
    if (liArray.length > 0) {
        document.write("<ul>");
        for (let i = 0; i < liArray.length; i++) {
            document.write(`<li>${liArray[i]}</li>`);
        }
        document.write("</ul>");
    }
}

ulCreatorForArrays([1, 2, 3, 4, true, false, "hello", "mynameis"]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.
function divCreatorForObjects(users) {
    for (const user of users) {
        document.write("<div style='border:1px solid black'>");
        for (const key in user) {
            document.write(`<p>${key} - ${user[key]}</p>`)
        }
        document.write("</div>");
    }
}

divCreatorForObjects([
    {
        id: 1,
        name: "elena",
        age: 31
    },
    {
        id: 2,
        name: "vasya",
        age: 34
    },
    {
        id: 3,
        name: "kolya",
        age: 28
    }
]);

// - створити функцію яка повертає найменьше число з масиву
function min(nums) {
    let minNumber = nums[0];
    for (const num of nums) {
        if (num < minNumber) {
            minNumber = num;
        }
    }
    return minNumber;
}

console.log(min([1, 2, 3, 4, 5, 6, -99, 7, 8, 9, 10000, -5]));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
function sum(nums) {
    let sum = 0;
    for (const num of nums) {
        sum += +num;
    }
    return sum;
}

console.log(sum([1, 2, 3, 4, 5]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, index1, index2) {
    if (index1 >= 0 && index1 < arr.length - 1 && index2 >= 0 && index2 < arr.length && index1 !== index2) {
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
        return arr;
    }
    return NaN;
}

function swapUpd(arr, index1, index2) {
    if (index1 >= 0 && index1 < arr.length - 1 && index2 >= 0 && index2 < arr.length && index1 !== index2) {
        arr[index1] = arr[index1] + arr[index2];
        arr[index2] = arr[index1] - arr[index2];
        arr[index1] = arr[index1] - arr[index2];
        return arr;
    }
    return NaN;
}

console.log(swap([11, 22, 33, 44], 0, 1));
console.log(swapUpd([11, 22, 33, 44], 0, 3));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (const currency in currencyValues) {
        if (currencyValues[currency].currency === exchangeCurrency) {
            return sumUAH / currencyValues[currency].value;
        }
    }
}

console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));
