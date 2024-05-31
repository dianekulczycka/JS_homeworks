// - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX
// (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація
// про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX
// де ХХХ - айді користувача)

const HTMLElementCreator = (type, value, attributeKey, attributeValue) => {
    let element = document.createElement(`${type}`);
    element.innerText = value;
    if (attributeKey && attributeValue) {
        element[attributeKey] = attributeValue;
    }
    return element;
}
fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        console.log(users);
        for (const user of users) {
            const userContainer = HTMLElementCreator("div", "");
            const userId = HTMLElementCreator("h1", `User ${user["id"]}`);
            const fullName = HTMLElementCreator("h1", `${user["name"]}`);

            const getMoreLink = document.createElement("a");
            getMoreLink.innerText = "get more info";
            getMoreLink.href = "../userdetails/user-details.html";
            getMoreLink.addEventListener("click", () => {
                localStorage.setItem("id", user["id"]);
            })

            userContainer.append(userId, fullName, getMoreLink);
            document.getElementById("users").appendChild(userContainer);


        }
    });