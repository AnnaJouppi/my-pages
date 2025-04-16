const mapContainerId = 'map';

// Puolangan koordinaatit, niin Suomi on keskellä karttaa
var mymap = L.map(mapContainerId).setView([64.8680, 27.6726], 5);

// Haetaan courses.json tiedosto
async function getCourses() {
    let response = await fetch('courses.json');
    let data = await response.json();
console.log(data);

// Otetaan klusterit käyttöön
var markers = L.markerClusterGroup();

    data.forEach(course => {
    if (course.lat && course.lng) {
        var marker = L.marker([course.lat, course.lng])
        markers.addLayer(marker);
        marker.bindPopup(`<b>${course.course}</b>
                          <br>
                          <br>🏠${course.address}
                          <br>
                          <br>📞${course.phone}
                          <br>
                          <br>✉️${course.email}
                          <br>
                          <br>🌐${course.web}
                          <br>
                          <br>${course.text}`);
                          
    }
});

mymap.addLayer(markers);
}
getCourses();

// Lisää kartta
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);



