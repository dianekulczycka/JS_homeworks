// importing custom function

import {HTMLElementCreator} from "/miniproject/scripts/additional/functions.js";

// adding a link that leads back to user-details.html for convenience

const goBackBtn = HTMLElementCreator("a", "Go Back", "href", "user-details.html");
goBackBtn.id = "goBackBtn";
document.getElementById("main").appendChild(goBackBtn);

// fetching data for chosen post by getting post's id from the local storage
fetch("https://jsonplaceholder.typicode.com/posts/" + localStorage.getItem("postId"))
    .then(response => response.json())
    .then(post => {

        // creating a post and comments wrappers for better styling

        const postBlock = HTMLElementCreator("div", "");
        const commentsBlock = HTMLElementCreator("div", "");

        postBlock.className = "postBlock";
        commentsBlock.className = "commentsBlock";

        // creating a post

        for (const postKey in post) {
            if (postKey === "body") {
                let postEl = HTMLElementCreator("h2", post[postKey]);
                postBlock.appendChild(postEl);
            } else {
                let postEl = HTMLElementCreator("h2", `${postKey}: ${post[postKey]}`);
                postBlock.appendChild(postEl);
            }
        }

        // fetching comments

        fetch("https://jsonplaceholder.typicode.com/posts/" + localStorage.getItem("postId") + "/comments")
            .then(response => response.json())
            .then(comments  => {
                for (const comment of comments) {
                    const commentBlock = HTMLElementCreator("div", "");
                    commentBlock.className = "commentBlock";
                    for (const commentKey in comment) {
                        if (commentKey === "body") {
                            const commentBodyBlock = HTMLElementCreator("div", "");
                            commentBodyBlock.className = "commentBodyBlock";
                            let commentEl = HTMLElementCreator("h4", comment[commentKey]);
                            commentBodyBlock.appendChild(commentEl);
                            commentBlock.appendChild(commentBodyBlock);
                        } else {
                            let commentEl = HTMLElementCreator("h4", `${commentKey}: ${comment[commentKey]}`);
                            commentBlock.appendChild(commentEl);
                        }
                        commentsBlock.appendChild(commentBlock);
                    }
                }

        })

        // adding postBlock, commentsBlock to the document

        document.getElementById("main").append(postBlock, commentsBlock);
    })
