function laskeALV(hinta, alv) {
    
    
    const alvProsentti = alv * 100; // Muuta ALV prosentiksi
    const alvillinenHinta = hinta * (1 + alv); // Laske ALV:n kanssa
    const alvMaara = hinta * alv; // Laske ALV:n määrä
   

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<p>Alviton hinta: ${hinta}</p><p>ALV-kanta: ${alvProsentti.toFixed(1)} %</p><p>ALVin määrä: ${alvMaara} euroa.</p><p>ALVillinen hinta: ${alvillinenHinta} euroa.</p>`;
}