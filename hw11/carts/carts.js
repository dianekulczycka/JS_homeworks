//- взяти https://dummyjson.com/docs/carts
// та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
//
let baseURL = 'https://dummyjson.com/carts';
fetch(baseURL)
    .then(response => response.json())
    .then(({carts}) => {
        for (const cart in carts) {
            let cartContainer = document.createElement("div");
            let cartHeader = document.createElement("h2");
            cartHeader.innerText = `Cart ID ${carts[cart].id}`;
            let userId = document.createElement("h3");
            userId.innerText = `UserID: ${carts[cart].userId}`;
            let desc = document.createElement("p");
            desc.innerText = `Total: $${carts[cart].total}, discount: $${carts[cart].discountedTotal},
            total products: ${carts[cart].totalProducts}, total amount: ${carts[cart].totalQuantity}`;
            let productsContainer = document.createElement("div");
            let productContainerHeader = document.createElement("h4");
            productContainerHeader.innerText = "Products:";
            productsContainer.append(productContainerHeader);
            if (carts[cart].products) {
                let products = carts[cart].products;
                console.log(products);
                for (const product in products) {
                    let productContainer = document.createElement("div");
                    let productName = document.createElement("h5");
                    productName.innerText = `Name: ${products[product].title}`;
                    let productId = document.createElement("h5");
                    productId.innerText = `Id: ${products[product].id}`;
                    let productPrice = document.createElement("p");
                    productPrice.innerText = `Price per one: $${products[product].price}`;
                    let productQuantity = document.createElement("p");
                    productQuantity.innerText = `Amount: ${products[product].quantity}`;
                    let productTotal = document.createElement("h5");
                    productTotal.innerText = `Total: ${products[product].total}`;
                    let discountPercentage = document.createElement("p");
                    discountPercentage.innerText = `Discount percent: ${products[product].discountPercentage}%`;
                    let discountedTotal = document.createElement("p");
                    discountedTotal.innerText = `Total saved: $${products[product].discountedTotal}`;
                    let productImage = document.createElement("img");
                    productImage.src = products[product].thumbnail;
                    productContainer.append(productId, productName, productTotal, productPrice, productQuantity, discountPercentage, discountedTotal, productImage);
                    productsContainer.appendChild(productContainer);
                }
            }
            cartContainer.append(cartHeader, userId, desc, productsContainer);
            document.getElementById('main').appendChild(cartContainer);
        }
    });
