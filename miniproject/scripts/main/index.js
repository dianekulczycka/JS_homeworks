// importing custom function

import {HTMLElementCreator} from "/miniproject/scripts/additional/functions.js";

// fetching users from given endpoint

fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (const user of users) {

            // creating a wrap for user info

            const userBlock = HTMLElementCreator("div", "");
            userBlock.className = "userBlock";

            // declaring id and name of users

            const idEl = HTMLElementCreator("h1", `User ${user["id"]}`);
            const nameEL = HTMLElementCreator("h1", `${user["name"]}`);

            // creating a link that leads to user-details page

            const showMoreBtn = HTMLElementCreator("a", "Learn More", "href", "user-details.html");

            // adding an event listener to a btn that adds
            // an id of the user we need to show
            // on a user-details page to a local storage

            showMoreBtn.addEventListener("click", () => {
                localStorage.setItem("userId", user["id"]);
            })

            // appending everything to a document

            userBlock.append(idEl, nameEL, showMoreBtn);
            document.getElementById("main").appendChild(userBlock);
        }
    });