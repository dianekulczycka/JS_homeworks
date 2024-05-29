// - взяти https://dummyjson.com/docs/recipes т
// а вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.
const HTMLElementCreator = (type, value, attributeKey, attributeValue) => {
    let element = document.createElement(`${type}`);
    element.innerText = value;
    if (attributeKey && attributeValue) {
        element[attributeKey] = attributeValue;
    }
    return element;
}
const HTMLiterator = (array, type, wrapType, parent, headerType, headerValue) => {
    let wrap = document.createElement(`${wrapType}`);
    if (headerType && headerValue) {
        wrap.appendChild(HTMLElementCreator(headerType, headerValue));
    }
    for (const el in array) {
        wrap.appendChild(HTMLElementCreator(type, array[el]));
    }
    parent.appendChild(wrap);
}
fetch("https://dummyjson.com/recipes?limit=0")
    .then(response => response.json())
    .then(({recipes}) => {
        for (const recipe in recipes) {
            // ========================================== main fields
            let recipeHeader = HTMLElementCreator('h1', `${recipes[recipe].id}. ${recipes[recipe].name}`)
            let rating = HTMLElementCreator('h2', `Rating: ${recipes[recipe].rating} based on ${recipes[recipe].reviewCount} reviews`);
            let mainInfo = HTMLElementCreator("h3", `Cuisine: ${recipes[recipe].cuisine}
            Difficulty: ${recipes[recipe].difficulty}
            Author: userID ${recipes[recipe].userId}`);
            let desc = HTMLElementCreator("h4", `Calories per serving: ${recipes[recipe].caloriesPerServing} 
            Cooking time: ${recipes[recipe].cookTimeMinutes} minutes
            Preparation time: ${recipes[recipe].prepTimeMinutes} minutes
            Type of meal: ${recipes[recipe].mealType}
            Servings:  ${recipes[recipe].servings}
            `);
            let image = HTMLElementCreator("img", "", "src", recipes[recipe].image);
            // ============================ appending to doc
            document.getElementById("recipes").append(image, recipeHeader, rating, mainInfo, desc);
            // =============================== iterations
            HTMLiterator(recipes[recipe].instructions, "li", "ul", document.getElementById("recipes"), "h3", "Instructions:");
            HTMLiterator(recipes[recipe].ingredients, "li","ol", document.getElementById("recipes"), "h3", "Ingredients:");
            HTMLiterator(recipes[recipe].tags, "li","ul", document.getElementById("recipes"), "h5", "Tags:");
        }
    });


