//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div style="border: 1px black solid; margin: 10px;">Div</div>`);
}

//- За допомогою циклу for і document.write() вивести 10 блоків div
// c довільним текстом і індексом всередині
for (let i = 1; i <= 10; i++) {
    document.write(`<div id="${i}" style="border: 1px blue solid; margin: 10px;">Div ${i}</div>`);
}

// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let countOne = 0;
while (countOne < 20) {
    document.write(`<h1>Header</h1>`);
    countOne++;
}

// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let countTwo = 1;
while (countTwo < 21) {
    document.write(`<h1 id="${countTwo}" style="color: blue;">Header ${countTwo}</h1>`);
    countTwo++;
}

// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
let listOfItems = ["html", "css", "javascript", "mysql", "mongodb", "react", "angular", "node.js"];

document.write("<ul>");
for (let i = 0; i < listOfItems.length; i++) {
    document.write(`<li>${listOfItems[i]}</li>`);
}
document.write("</ul>");

// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

let products = [
    {
        title: "milk",
        price: 22,
        image: "https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg"
    },
    {
        title: "juice",
        price: 27,
        image: "https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg"
    },
    {
        title: "tomato",
        price: 47,
        image: "https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74"
    },
    {
        title: "tea",
        price: 15,
        image: "https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png"
    },
];

document.write("<div class=\"products\">");
for (let i = 0; i < products.length; i++) {
    let product = products[i];
    document.write(`
        <div class="product-card">
            <h3 class="product-title">${product.title}. Price - ${product.price}</h3>
            <img style="width: 100px" src="${product.image}" alt="product image" class="product-image">
        </div>
    `);
}
document.write("</div>");

// за допомоги циклу вивести:
let users = [
    {name: "vasya", age: 31, status: false},
    {name: "petya", age: 30, status: true},
    {name: "kolya", age: 29, status: true},
    {name: "olya", age: 28, status: false},
    {name: "max", age: 30, status: true},
    {name: "anya", age: 31, status: false},
    {name: "oleg", age: 28, status: false},
    {name: "andrey", age: 29, status: true},
    {name: "masha", age: 30, status: true},
    {name: "olya", age: 31, status: false},
    {name: "max", age: 31, status: true}
];

//  - користувачів зі статусом true
document.write("<h5>Users with \"/true/\" status:</h5>");
for (let i = 0; i < users.length; i++) {
    if (users[i].status === true) {
        document.write(`<p>${i + 1} - ${users[i].name}</p>`);
    }
}

//  - користувачів зі статусом false
document.write("<h5>Users with \"/false/\" status:</h5>");
for (let i = 0; i < users.length; i++) {
    if (users[i].status === false) {
        document.write(`<p>${i + 1} - ${users[i].name}</p>`);
    }
}

//  - користувачів які старші за 30 років
document.write("<h5>Users older than 30 y.o:</h5>");
for (let i = 0; i < users.length; i++) {
    if (users[i].age > 30) {
        document.write(`<p>${i + 1} - ${users[i].name}, ${users[i].age} y.o.</p>`);
    }
}
