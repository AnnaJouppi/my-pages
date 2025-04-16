const mapContainerId = 'map';

// Puolangan koordinaatit, niin Suomi on keskellä karttaa
var mymap = L.map(mapContainerId).setView([64.8680, 27.6726], 5);

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

// Markerit:
// Jyväskylä
var marker = L.marker([62.2415, 25.7209]).addTo(mymap);
marker.bindPopup("Jyväskylä");

// Hamina
var marker = L.marker([60.5690, 27.1979]).addTo(mymap);
marker.bindPopup("Hamina");

// Tampere
var marker = L.marker([61.4981, 23.7610]).addTo(mymap);
marker.bindPopup("Tampere");

//Seinäjoki
var marker = L.marker([62.7902, 22.8286]).addTo(mymap);
marker.bindPopup("Seinäjoki");

// Kokkola
var marker = L.marker([63.83847, 23.13066]).addTo(mymap);
marker.bindPopup("Kokkola");