async function getProducts() {
    let response = await fetch('https://fakestoreapi.com/products');
    let data = await response.json();
    console.log(data);
    return data;
}

getProducts();

async function renderProducts() {
    let products = await getProducts(); 
    console.log(products);

    let productdiv = document.getElementById("products");

    products.forEach(product => {        


        // Create product card container
        let productCard = document.createElement('div');
        productCard.className = 'product-card';

        // Product title (appears on top)
        let title = document.createElement('h3');
        title.className = 'header';
        title.innerHTML = product.title;

        // Product image
        let image = document.createElement('img');
        image.src = product.image;
        image.alt = product.title;
        image.className = 'productImage';

        // Product details container
        let details = document.createElement('div');
        details.className = 'details';

        // Product description
        let description = document.createElement('p');
        description.className = 'text';
        description.innerHTML = product.description;

        // Product price
        let price = document.createElement('p');
        let numberstr = new Intl.NumberFormat('fi-FI').format(product.price);
        price.className = 'price';
        price.innerHTML = `${numberstr} €`;

        // Product rating
        let rating = document.createElement('p');
        rating.className = 'rating';
        rating.innerHTML = `Rating: ${product.rating.rate}`;


        // Append elements to details container
        details.appendChild(description);
        details.appendChild(price);
        details.appendChild(rating);

        // Append title, image, and details to product card
        productCard.appendChild(title);
        productCard.appendChild(image);
        productCard.appendChild(details);

        // Append product card to the main product grid
        productdiv.appendChild(productCard); 
    });
}

renderProducts();