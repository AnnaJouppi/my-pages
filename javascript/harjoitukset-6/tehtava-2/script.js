const mapContainerId = 'map';

// Puolangan koordinaatit, niin Suomi on keskellä karttaa
var mymap = L.map(mapContainerId).setView([64.8680, 27.6726], 5);

// Lisätään Leaflet-kartta
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

const form = document.getElementById('place-form');
const nameInput = document.getElementById('name');
const latitudeInput = document.getElementById('latitude');
const longitudeInput = document.getElementById('longitude');

// Lataa paikat storagesta
let places = JSON.parse(localStorage.getItem('places')) || [];

form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Objekti uudelle paikalle
    const newPlace = {
        name: nameInput.value,
        latitude: parseFloat(latitudeInput.value),
        longitude: parseFloat(longitudeInput.value)
    };

    //Lisää paikka karttaan
    var marker = L.marker([latitudeInput.value, longitudeInput.value]).addTo(mymap);
    marker.bindPopup(nameInput.value);

    // Lisää uusi paikka karttaan
    var marker = L.marker([newPlace.latitude, newPlace.longitude]).addTo(mymap);
    marker.bindPopup(newPlace.name);

    places.push(newPlace);

    // Tallenna paikkka storageen
    localStorage.setItem('places', JSON.stringify(places));

    // Clear the form inputs
    form.reset();
});

// Load markers for existing places on the map
places.forEach(place => {
    var marker = L.marker([place.latitude, place.longitude]).addTo(mymap);
    marker.bindPopup(place.name);
});