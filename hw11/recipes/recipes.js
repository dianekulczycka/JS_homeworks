// - взяти https://dummyjson.com/docs/recipes т
// а вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.
const createHTMLEl = (type, value, attributeKey, attributeValue) => {
    let element = document.createElement(`${type}`);
    element.innerText = value;
    if (attributeKey && attributeValue) {
        element[attributeKey] = attributeValue;
    }
    return element;
}
const HTMLiterator = (array, type, parent, headerType, headerValue) => {
    if (headerType && headerValue) {
        parent.appendChild(createHTMLEl(headerType, headerValue));
    }
    for (const el in array) {
        parent.appendChild(createHTMLEl(type, array[el]));
    }
}
fetch("https://dummyjson.com/recipes?limit=0")
    .then(response => response.json())
    .then(({recipes}) => {
        for (const recipe in recipes) {
            // ========================================== main fields
            let recipeHeader = createHTMLEl('h1', `${recipes[recipe].id}. ${recipes[recipe].name}`)
            let rating = createHTMLEl('h2', `Rating: ${recipes[recipe].rating} based on ${recipes[recipe].reviewCount} reviews`);
            let mainInfo = createHTMLEl("h3", `Cuisine: ${recipes[recipe].cuisine}
            Difficulty: ${recipes[recipe].difficulty}
            Author: userID ${recipes[recipe].userId}`);
            let desc = createHTMLEl("h4", `Calories per serving: ${recipes[recipe].caloriesPerServing} 
            Cooking time: ${recipes[recipe].cookTimeMinutes} minutes
            Preparation time: ${recipes[recipe].prepTimeMinutes} minutes
            Type of meal: ${recipes[recipe].mealType}
            Servings:  ${recipes[recipe].servings}
            `);
            let image = createHTMLEl("img", "", "src", recipes[recipe].image);
            // ============================ appending to doc
            document.getElementById("recipes").append(image, recipeHeader, rating, mainInfo, desc);
            // =============================== iterations
            HTMLiterator(recipes[recipe].instructions, "li", document.getElementById("recipes"), "h3", "Instructions:");
            HTMLiterator(recipes[recipe].ingredients, "li", document.getElementById("recipes"), "h3", "Ingredients:");
            HTMLiterator(recipes[recipe].tags, "li", document.getElementById("recipes"), "h3", "Tags:");
        }
    });


