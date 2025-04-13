function addProduct() {
    const productName = document.getElementById('name').value;
    const productPrice = document.getElementById('price').value;
    const productCount = document.getElementById('count').value;

    // productDiv
    let productDiv = document.createElement('div');
    let divAttr = document.createAttribute('class');
    divAttr.value = 'product';
    productDiv.setAttributeNode(divAttr);

    // remove
    let removeElem = document.createElement('p');
    let removeAttr = document.createAttribute('class');
    removeAttr.value = 'remove';
    removeElem.setAttributeNode(removeAttr);

    let removeText = document.createTextNode(`X`);
    removeElem.appendChild(removeText);

    removeElem.onclick = function() {
        this.parentNode.remove();
    }

    productDiv.appendChild(removeElem);

    // name
    let nameElem = document.createElement('p');
    let nameAttr = document.createAttribute('class');
    nameAttr.value = 'name';
    nameElem.setAttributeNode(nameAttr);
    let nameText = document.createTextNode(`Name: ${productName}`);
    nameElem.appendChild(nameText);
    productDiv.appendChild(nameElem);

    // price
    let priceElem = document.createElement('p');
    let priceAttr = document.createAttribute('class');
    priceAttr.value = 'price';
    priceElem.setAttributeNode(priceAttr);
    let priceText = document.createTextNode(`Price: ${productPrice}`);
    priceElem.appendChild(priceText);
    productDiv.appendChild(priceElem);

    // count
    let countElem = document.createElement('p');
    let countAttr = document.createAttribute('class');
    countAttr.value = 'count';
    countElem.setAttributeNode(countAttr);
    let countText = document.createTextNode(`Count: ${productCount}`);
    countElem.appendChild(countText);
    productDiv.appendChild(countElem);

    // Lisätään products-diviin
    let products = document.getElementById('products');
    products.appendChild(productDiv);
   
    }
 // addProduct()