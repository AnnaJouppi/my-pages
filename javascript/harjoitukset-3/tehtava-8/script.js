class Vauhtilaskin {
  constructor(tunnit, minuutit, sekunnit, km) {
    this.tunnit = tunnit;
    this.minuutit = minuutit;
    this.sekunnit = sekunnit;
    this.km = km;
  }

  calcKmhPace() {
    const totalHours = this.tunnit + (this.minuutit * 60 + this.sekunnit) / 3600;
    return this.km / totalHours;
  }

  // Getteri
  get kmhpace() {
    return this.calcKmhPace().toFixed(2); 
  }
}

function calcKmhPace() {
  const tunnit = parseFloat(document.getElementById('n1').value);
  const minuutit = parseFloat(document.getElementById('n2').value);
  const sekunnit = parseFloat(document.getElementById('n3').value);
  const km = parseFloat(document.getElementById('n4').value);

  const laskin = new Vauhtilaskin(tunnit, minuutit, sekunnit, km);


    document.getElementById('results').innerHTML = `Vauhtisi on ${laskin.kmhpace} km/h!`;
}
