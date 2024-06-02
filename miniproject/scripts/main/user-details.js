// importing custom functions

import {HTMLElementCreator, HTMLiterator} from "/miniproject/scripts/additional/functions.js";

// adding a link that leads back to index.html for convenience

const goBackBtn = HTMLElementCreator("a", "Go Back", "href", "index.html");
goBackBtn.id = "goBackBtn";
document.getElementById("main").appendChild(goBackBtn);

// creating a wrapper for better styling

const userBlock = HTMLElementCreator("div", "");
userBlock.className = "userBlock";

// fetching data for chosen user by getting user's id from the local storage
fetch("http://jsonplaceholder.typicode.com/users/" + localStorage.getItem("userId"))
    .then(response => response.json())
    .then(user => {

        // creating HTML elements based on primitive keys

        const id = HTMLElementCreator("h1", `User ${user["id"]}`);
        const name = HTMLElementCreator("h1", `${user["name"]}`);
        const username = HTMLElementCreator("h1", `"${user["username"]}"`);
        const email = HTMLElementCreator("a", `${user["email"]}`, "href", `mailto:${user["email"]}`);
        const phone = HTMLElementCreator("h2", `${user["phone"]}`);
        const website = HTMLElementCreator("a", `${user["website"]}`, "href", `http://${user["website"]}`);

        // appending to the wrapper

        userBlock.append(id, name, username, email, phone, website);

        // iterating through objects inside a response and appending them to the document

        const userIterator = (arr, title, parent = userBlock) => {
            HTMLiterator(arr, "li", "ul", parent, "h3", title);
        }
        userIterator(user["address"], "Address:");
        userIterator(user["address"]["geo"], "Geo:");
        userIterator(user["company"], "Company:");

        // creating a wrap block for posts and hiding it from the user

        const postsBlock = HTMLElementCreator("div", "");
        postsBlock.className = "postsBlock";
        postsBlock.style.display = "none";

        // adding a button to show posts' titles

        const showPostsTitlesBtn = HTMLElementCreator("button", `Show posts of User ${localStorage.getItem("userId")}`);
        showPostsTitlesBtn.addEventListener("click", () => {
            postsBlock.style.display = postsBlock.style.display === "grid" ? "none" : "grid";
            showPostsTitlesBtn.innerText = postsBlock.style.display === "grid" ? "Hide posts" : `Show posts of User ${localStorage.getItem("userId")}`;
            document.title = postsBlock.style.display === "grid?"? "User Details" : "User Details and Posts";
        });

        userBlock.appendChild(showPostsTitlesBtn);

        // fetching post's titles

        fetch("https://jsonplaceholder.typicode.com/users/" + localStorage.getItem("userId") + "/posts")
            .then(response => response.json())
            .then(posts => {

                // fetching posts' titles ans ids into arrays

                const postsTitles = [];
                const postIds = [];
                for (const post in posts) {
                    postsTitles.push(posts[post]["title"]);
                    postIds.push(posts[post]["id"]);
                }

                // making a link element leading to post-details.html for every post title
                // iterating through posts ids and titles assuming titles' amount is the same as ids'

                postIds.forEach((postId, index) => {
                    const postTitleEl = HTMLElementCreator("a", `${index + 1}. ${postsTitles[index].toUpperCase()}`, "href", "post-details.html");

                    // adding an event listener that records the post id when clicked on
                    postTitleEl.addEventListener("click", () => {
                        localStorage.setItem("postId", postId);
                    });

                    // appending the link to wrapper block
                    postsBlock.appendChild(postTitleEl);
                });


            });

        // adding everything to the document

        document.getElementById("main").append(userBlock, postsBlock);

    });
