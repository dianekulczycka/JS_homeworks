// - взяти https://dummyjson.com/docs/recipes т
// а вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.

let baseURL = 'https://dummyjson.com/recipes';
fetch(baseURL)
    .then(response => response.json())
    .then(({recipes}) => {
        console.log(recipes);
        for (const recipe in recipes) {
            let recipeContainer = document.createElement("div");
            let recipeHeader = document.createElement("h1");
            recipeHeader.innerText = `${recipes[recipe].id}. ${recipes[recipe].name}`;
            let rating = document.createElement("h2");
            rating.innerText = `Rating: ${recipes[recipe].rating} based on ${recipes[recipe].reviewCount} reviews`;
            let mainInfo = document.createElement("h3");
            mainInfo.innerText = `Cuisine: ${recipes[recipe].cuisine}
            Difficulty: ${recipes[recipe].difficulty}
            Author: userID ${recipes[recipe].userId}`;
            let desc = document.createElement("h4");
            desc.innerText = `Calories per serving: ${recipes[recipe].caloriesPerServing} 
            Cooking time: ${recipes[recipe].cookTimeMinutes} minutes
            Preparation time: ${recipes[recipe].prepTimeMinutes} minutes
            Type of meal: ${recipes[recipe].mealType}
            Servings:  ${recipes[recipe].servings}
            `;
            let image = document.createElement("img");
            image.src = recipes[recipe].image;

            let instructionsContainer = document.createElement("ul");
            let instructionsContainerHeader = document.createElement("h3");
            instructionsContainerHeader.innerText = "Instructions:";
            instructionsContainer.appendChild(instructionsContainerHeader);
            let instructionsArr = recipes[recipe].instructions;
            for (const instruction of instructionsArr) {
                let instructionEl = document.createElement("li");
                instructionEl.innerText = instruction;
                instructionsContainer.appendChild(instructionEl);
            }

            let ingredientsContainer = document.createElement("div");
            let ingredientsContainerHeader = document.createElement("h3");
            ingredientsContainerHeader.innerText = "Ingredients:";
            ingredientsContainer.appendChild(ingredientsContainerHeader);
            let ingredientsArr = recipes[recipe].ingredients;
            for (const ingredient of ingredientsArr) {
                let ingredientEl = document.createElement("li");
                ingredientEl.innerText = ingredient;
                ingredientsContainer.appendChild(ingredientEl);
            }

            let tagsContainer = document.createElement("div");
            let tagsContainerHeader = document.createElement("h3");
            tagsContainerHeader.innerText = "Tags:";
            tagsContainer.appendChild(tagsContainerHeader);
            let tagsArr = recipes[recipe].tags;
            for (const tag of tagsArr) {
                let tagEl = document.createElement("li");
                tagEl.innerText = tag;
                tagsContainer.appendChild(tagEl);
            }

            recipeContainer.append(image, recipeHeader, rating, mainInfo, desc, ingredientsContainer, instructionsContainer, tagsContainer);
            document.getElementById("recipes").appendChild(recipeContainer);
        }

    });


