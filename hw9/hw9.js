//- створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
let newBlock = document.createElement("div");
newBlock.className = "wrap collapse alpha beta";
newBlock.style.backgroundColor = "red";
newBlock.style.color = "white";
newBlock.style.fontSize = "2em";
newBlock.innerHTML = "<p> Hello </p>"; // задаю додатково текст бо так блок не видно на сторінці
document.body.appendChild(newBlock);
document.body.appendChild(newBlock.cloneNode(true));
// Є масив:
// ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let navItems = ['Main', 'Products', 'About us', 'Contacts'];
let ul = document.createElement("ul");
for (const navItem in navItems) {
    let li = document.createElement("li");
    li.innerText = navItems[navItem];
    ul.appendChild(li);
}
document.body.appendChild(ul);
//- Є масив
let coursesAndDurationArray = [{title: 'JavaScript Complex', monthDuration: 5}, {
    title: 'Java Complex',
    monthDuration: 6
}, {title: 'Python Complex', monthDuration: 6}, {title: 'QA Complex', monthDuration: 4}, {
    title: 'FullStack',
    monthDuration: 7
}, {title: 'Frontend', monthDuration: 4}];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let wrap = document.createElement("div");
for (const course in coursesAndDurationArray) {
    let title = document.createElement("h3");
    title.innerText = coursesAndDurationArray[course].title;
    let duration = document.createElement("h4");
    duration.innerText = coursesAndDurationArray[course].monthDuration;
    wrap.appendChild(title);
    wrap.appendChild(duration);
}
document.body.appendChild(wrap);
//- Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.
let secondWrap = document.createElement("div");
for (const course in coursesAndDurationArray) {
    let divItem = document.createElement("div");
    divItem.className = "item";
    let h1 = document.createElement("h1");
    h1.className = "heading";
    h1.innerText = coursesAndDurationArray[course].title;
    let p = document.createElement("p");
    p.className = "description";
    p.innerText = coursesAndDurationArray[course].monthDuration;
    divItem.appendChild(h1);
    divItem.appendChild(p);
    secondWrap.appendChild(divItem);
}
document.body.appendChild(secondWrap);

//- є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
// Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
let simpsonsWrap = document.createElement("div");
simpsonsWrap.className = "simpsons";
for (const simpson in simpsons) {
    let divItem = document.createElement("div");
    divItem.className = "member";
    let fullName = document.createElement("h2");
    let age = document.createElement("h3");
    let info = document.createElement("p");
    let pic = document.createElement("img");
    fullName.innerText = `${simpsons[simpson].name} ${simpsons[simpson].surname}`;
    age.innerText = `${simpsons[simpson].age} year(s) old`;
    info.innerText = simpsons[simpson].info;
    pic.setAttribute("src", simpsons[simpson].photo);
    pic.style.width = "8em";
    divItem.appendChild(fullName);
    divItem.appendChild(age);
    divItem.appendChild(info);
    divItem.appendChild(pic);
    simpsonsWrap.appendChild(divItem);
}
document.body.appendChild(simpsonsWrap);

//Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
let coursesAndModulesArray = [
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
let thirdWrap = document.createElement("div");
thirdWrap.style.border = "2px red solid";
thirdWrap.style.padding = "0.5em";
for (const course of coursesAndModulesArray) {
    let divItem = document.createElement("div");
    divItem.style.border = "1px black solid";
    divItem.style.padding = "0.5em";
    divItem.style.textAlign = "center";
    let title = document.createElement("h1");
    let monthDuration = document.createElement("h2");
    let hoursDuration = document.createElement("h3");
    let modulesWrap = document.createElement('div');
    title.innerText = `title: ${course.title}`;
    monthDuration.innerText = `month duration: ${course.monthDuration} month(s)`;
    hoursDuration.innerText = `hours: ${course.hourDuration} hours`;
    divItem.appendChild(title);
    divItem.appendChild(monthDuration);
    divItem.appendChild(hoursDuration);

    for (const module of course.modules) {
        let p = document.createElement('p');
        p.innerText = module;
        modulesWrap.appendChild(p);
    }
    divItem.appendChild(modulesWrap);
    thirdWrap.appendChild(divItem);
}
document.body.appendChild(thirdWrap);

