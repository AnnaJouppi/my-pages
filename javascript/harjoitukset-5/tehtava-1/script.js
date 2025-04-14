// Haetaan talotiedot
async function getHouses() {
    let response = await fetch('talot.json');
    let data = await response.json();
    return data;
}

async function renderHouses() {
    let houses = await getHouses(); 
    console.log(houses);

    let housediv = document.getElementById("houses");

    houses.forEach(house => {        

        housecontainer = document.createElement('div');
        housecontainer.className = 'houseContainer';

        // kuva
        let image = document.createElement('img');
        image.src = house.image;
        image.className = 'houseImage';

        // otsikko
        let header = document.createElement('p');
        header.className = 'header';
        header.innerHTML = house.address;

        // koko
        let size = document.createElement('p');
        size.className = 'size';
        size.innerHTML =  `${house.size} m²`;

        // kuvaus
        let text = document.createElement('p');
        text.className = 'text';
        text.innerHTML = house.text;
       
        // hinta
        let price = document.createElement('p');
        let numberstr = new Intl.NumberFormat('fi-FI').format(house.price);
        price.className = 'price';
        price.innerHTML = `${numberstr} €`;
        

        housecontainer.appendChild(image);
        housecontainer.appendChild(header);
        housecontainer.appendChild(size);
        housecontainer.appendChild(text);
        housecontainer.appendChild(price);

                housediv.appendChild(housecontainer); 
    });    
}

renderHouses();