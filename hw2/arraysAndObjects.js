// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу,
let array = [1, 2, 3, 4, 5, 6, 7, 8, null, "hello"];
// вивести кожен елемент в консоль
console.log(array[0]); // 1
console.log(array[1]); // 2
console.log(array[2]); // 3
console.log(array[3]); // 4
console.log(array[4]); // 5
console.log(array[5]); // 6
console.log(array[6]); // 7
console.log(array[7]); // 8
console.log(array[8]); // null
console.log(array[9]); // hello

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let crimeAndPunishment = {
    title: "Crime and Punishment",
    pageCount: 492,
    genre: "Psychological Fiction"
};
let castleToCastle = {
    title: "Castle to Castle",
    pageCount: 315,
    genre: "Novel"
};
let winnieThePooh = {
    title: "Winnie-the-Pooh",
    pageCount: 168,
    genre: "Children's Literature"
};

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let goodOmens = {
    title: "Good Omens",
    pageCount: 456,
    genre: "Fantasy Comedy",
    authors: [
        {
            name: "Neil Gaiman",
            age: 51
        },
        {
            name: "Terry Pratchett",
            age: 52
        },
    ]
};
let theTalisman = {
    title: "The Talisman",
    pageCount: 646,
    genre: "Dark Fantasy",
    authors: [
        {
            name: "Stephen King",
            age: 65
        },
        {
            name: "Peter Straub",
            age: 45
        },
    ]
};
let blackHouse = {
    title: "Black House",
    pageCount: 625,
    genre: "Horror fiction",
    authors: [
        {
            name: "Stephen King",
            age: 65
        },
        {
            name: "Peter Straub",
            age: 45
        },
    ]
};

//- Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {
        name: "Alexandr",
        username: "user1",
        password: "qwerty"
    },
    {
        name: "Irina",
        username: "user2",
        password: "abc123"
    },
    {
        name: "Vasiliy",
        username: "user3",
        password: "vasya2001"
    },
    {
        name: "Elena",
        username: "user4",
        password: "slavaukraini"
    },
    {
        name: "Pavel",
        username: "user5",
        password: "admin"
    },
    {
        name: "Marina",
        username: "user6",
        password: "password"
    },
    {
        name: "Olga",
        username: "user7",
        password: "admin123"
    },
    {
        name: "David",
        username: "user8",
        password: "P@ssw0rd"
    },
    {
        name: "Sergey",
        username: "user9",
        password: "1111"
    },
    {
        name: "Oleg",
        username: "user10",
        password: "root"
    },
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

// - описати масив, в якому буде зберігатись інформація про температуру вранці,
// вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати.
// Нормальних варіантів опису - 2.
// Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
let temps = [
    {
        day: "Monday",
        morning: 18,
        afternoon: 24,
        evening: 20
    },
    {
        day: "Tuesday",
        morning: 17,
        afternoon: 23,
        evening: 19
    },
    {
        day: "Wednesday",
        morning: 20,
        afternoon: 25,
        evening: 21
    },
    {
        day: "Thursday",
        morning: 16,
        afternoon: 22,
        evening: 18
    },
    {
        day: "Friday",
        morning: 19,
        afternoon: 26,
        evening: 22
    },
    {
        day: "Saturday",
        morning: 21,
        afternoon: 27,
        evening: 23
    },
    {
        day: "Sunday",
        morning: 18,
        afternoon: 25,
        evening: 20
    }
];
