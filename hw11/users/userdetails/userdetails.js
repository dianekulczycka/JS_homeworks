function HTMLElementCreator(type, value, attributeKey, attributeValue) {
    let element = document.createElement(`${type}`);
    element.innerText = value;
    if (attributeKey && attributeValue) {
        element[attributeKey] = attributeValue;
    }
    return element;
}

function HTMLiterator(array, type, wrapType, parent, headerType, headerValue) {
    let wrap = document.createElement(`${wrapType}`);
    if (headerType && headerValue) {
        wrap.appendChild(HTMLElementCreator(headerType, headerValue));
    }
    for (const el in array) {
        if (typeof array[el] !== "object") {
            wrap.appendChild(HTMLElementCreator(type, array[el]));
        }
    }
    parent.appendChild(wrap);
}

let baseURL = new URL("http://jsonplaceholder.typicode.com/users");
let userId = localStorage.getItem("id");
fetch(baseURL + "/" + userId)
    .then(resp => resp.json())
    .then(user => {
        const userId = HTMLElementCreator("h1", `User ${user["id"]}`);
        const fullName = HTMLElementCreator("h1", `${user["name"]}`);
        const userName = HTMLElementCreator("h1", `"${user["username"]}"`);
        const email = HTMLElementCreator("a", `${user["email"]}`, "href", `mailto:${user["email"]}`);
        const phone = HTMLElementCreator("h2", `${user["phone"]}`);
        const website = HTMLElementCreator("a", `${user["website"]}`, "href", `${user["website"]}`);

        document.getElementById("userInfo").append(userId, fullName, userName, email, phone, website);

        HTMLiterator(user["address"], "li", "ul", document.getElementById("userInfo"), "h3", "Address:");
        HTMLiterator(user["address"]["geo"], "li", "ul", document.getElementById("userInfo"), "h4", "Geo:");
        HTMLiterator(user["company"], "li", "ul", document.getElementById("userInfo"), "h3", "Company:");
    });
