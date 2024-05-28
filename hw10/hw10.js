// Стоврити форму з трьома полями для name,sruname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився
// блок з вашим об'єктом
// ==========================

const showFullName = () => {
    let wrap = document.createElement("div");
    localStorage.setItem("fullName", JSON.stringify({
        name: document.getElementById("firstname").value,
        surname: document.getElementById("secondname").value
    }));
    wrap.innerText = `${document.getElementById("firstname").value} ${document.getElementById("secondname").value}`;
    document.body.appendChild(wrap);
}
document.getElementById("submit").addEventListener("click", showFullName);

//є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код,
// який при кожному перезавантажені сторінки буде додавати до неї +1

const incrementNumber = () => {
    let numValue = localStorage.getItem("incrementedOnReloadNum");
    numValue = +numValue;
    ++numValue;
    localStorage.setItem("incrementedOnReloadNum", JSON.stringify(numValue));
    document.getElementById("incrementedNum").innerText = JSON.stringify(numValue);
}
window.addEventListener("load", incrementNumber);

document.getElementById("clearLocalStorage").addEventListener("click", () => {
    localStorage.clear();
    window.location.reload();
});

//Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
// в масив sessions зберігається інформація про дату та час відвідування сторінки.
// Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно
// відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// =========================
let sessions = [];
const logVisits = () => {
    let oldLogs = localStorage.getItem("pageVisitedTimes");
    if (oldLogs) {
        sessions = JSON.parse(oldLogs);
    }
    sessions.push(new Date());
    localStorage.setItem("pageVisitedTimes", JSON.stringify(sessions));
}
window.addEventListener("load", logVisits);

//- Створити довільний елемент з id = text та створити кнопку.Використовуючи
// JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let disappearingText = document.createElement("h3");
disappearingText.innerText = "do not press the button pls";
let disappearingTextBtn = document.createElement("button");
disappearingTextBtn.innerText = "press me";
document.getElementById("ex4").append(disappearingText, disappearingTextBtn);
disappearingTextBtn.addEventListener("click", () => {
    disappearingText.style.display = "none";
});

// different take allowing to restore the text

let disappearingText2 = document.createElement("h3");
disappearingText2.innerText = "do not press the button too pls";
let disappearingTextBtn2 = document.createElement("button");
disappearingTextBtn2.innerText = "press me too";
document.getElementById("ex4").append(disappearingText2, disappearingTextBtn2);
disappearingTextBtn2.addEventListener("click", () => {
    disappearingText2.classList.toggle("disappear");
    disappearingTextBtn2.innerText = "press again";
});

//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на
// кнопку зчитати
// інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let ageCheckerBtn = document.getElementById("ageCheckerBtn");
let msg = document.createElement("div");
ageCheckerBtn.addEventListener("click", () => {
    let ageCheckerValue = document.getElementById("ageChecker").value;
    if (+ageCheckerValue >= 18 && +ageCheckerValue < 117) {
        msg.innerText = "access granted";
    } else if (+ageCheckerValue < 18) {
        msg.innerText = "sorry! you are too young";
    } else {
        msg.innerText = "you are either playing with the input form or you are the oldest person alive. if so, congrats!";
    }
    document.body.appendChild(msg);
});

//зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
let elements = [];
for (let i = 1; i <= 100; i++) {
    elements.push(i);
}

let currentPage = 1;
let step = 10;
let starterArr = elements.slice(currentPage - 1, currentPage + step - 1);
console.log(starterArr);
let elsContainer = document.createElement("div");
for (const el in starterArr) {
    let elContainer = document.createElement("h2");
    elContainer.innerText = starterArr[el];
    elsContainer.appendChild(elContainer);
}
const showPreviousElements = () => {
    if (currentPage >= 1) {
        currentPage--;
        elsContainer.innerHTML = '';
        let showArr = elements.slice(currentPage * step, currentPage * step + step);
        for (const el of showArr) {
            let elContainer = document.createElement("h2");
            elContainer.innerText = el;
            elsContainer.appendChild(elContainer);
        }
    }
}

const showNextElements = () => {
    if (currentPage < (elements.length) / step - 1) {
        currentPage++;
        elsContainer.innerHTML = '';
        let showArr = elements.slice(currentPage * step, currentPage * step + step);
        for (const el of showArr) {
            let elContainer = document.createElement("h2");
            elContainer.innerText = el;
            elsContainer.appendChild(elContainer);
        }
    }
}

let prevBtn = document.createElement("button");
prevBtn.innerText = "previous";
prevBtn.addEventListener("click", showPreviousElements);

let nextBtn = document.createElement("button");
nextBtn.innerText = "next";
nextBtn.addEventListener("click", showNextElements);

document.getElementById("ex6").append(elsContainer, prevBtn, nextBtn);






