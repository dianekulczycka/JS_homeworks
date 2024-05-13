//- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
console.log('hello world'.length);
console.log('lorem ipsum'.length);
console.log('javascript is cool'.length);

// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
console.log('hello world'.toUpperCase());
console.log('lorem ipsum'.toUpperCase());
console.log('javascript is cool'.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log('HELLO WORLD'.toLowerCase());
console.log('LOREM IPSUM'.toLowerCase());
console.log('JAVASCRIPT IS COOL'.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
console.log('                dirty string                     '.trim());

//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

const stringToArray = (str) => {
    return str.split(' ');
}
console.log(stringToArray('Ревуть воли як ясла повні'));

//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map
// перетворити всі об'єкти в масиві на стрінгові.
console.log([10, 8, -7, 55, 987, -1011, 0, 1050, 0].map((el) => el.toString()));

//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує
// його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
function sortNums(nums, direction = 'up') {
    if (direction === "up") {
        return nums.sort((a, b) => a - b);
    } else if (direction === "down") {
        return nums.sort((a, b) => b - a);
    }
}

console.log(sortNums([-65, 5, 23, 2, 3, 32, 3, 768, 678, -2423]));
console.log(sortNums([-65, 5, 23, 2, 3, 32, 3, 768, 678, -2423], 'down'));

//- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//  -- відсортувати його за спаданням за monthDuration
try {
    console.log(coursesAndDurationArray.sort((course1, course2) => course2.monthDuration - course1.monthDuration));
} catch (e) {
    console.error(e);
}
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(coursesAndDurationArray.filter(course => course.monthDuration > 5));
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
console.log(coursesAndDurationArray.map((course, index) => ({
    ...course,
    id: index + 1
})));

// описати колоду карт (від 6 до туза без джокерів)
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

const koloda = [];
const cardSuits = ['spade', 'diamond', 'heart', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
for (const cardSuit of cardSuits) {
    for (const value of values) {
        if (cardSuit === 'spade' || cardSuit === 'clubs') {
            const color = 'black';
            koloda.push({cardSuit, value, color});
        } else {
            const color = 'red';
            koloda.push({cardSuit, value, color});
        }
    }
}
console.log(koloda);
// - знайти піковий туз
console.log(koloda.find(card => card.cardSuit === 'spade' && card.value === 'ace'));
//  - всі шістки
console.log(koloda.filter(card => card.value === '6'));
//  - всі червоні карти
console.log(koloda.filter(card => card.color === 'red'));
//  - всі буби
console.log(koloda.filter(card => card.cardSuit === 'diamond'));
//  - всі трефи від 9 та більше
console.log(koloda.filter(card => card.cardSuit === 'clubs' && (card.value === '10' || card.value === 'jack' || card.value === 'queen' || card.value === 'king' || card.value === 'ace')));

// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
const coursesArrayContainingSass = coursesArray.filter(course => course['modules'].includes('sass'));
console.log(coursesArrayContainingSass);
const coursesArrayContainingDocker = coursesArray.filter(course => course['modules'].includes('docker'));
console.log(coursesArrayContainingDocker);
