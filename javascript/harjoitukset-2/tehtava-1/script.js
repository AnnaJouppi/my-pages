function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear(); 
    return currentYear - birthYear; 
}

function printResults(name, birthYear) {
    const age = calculateAge(birthYear);
    const resultDiv = document.getElementById("results");
    resultDiv.innerHTML = `<h2>Hi <strong>${name}</strong>!</h2>
        <p>It has been a pleasure working with you <strong>${name}</strong> all these years. 
        Nice to see you are only <strong>${age}</strong> years old. So we still have several years to work together.</p>`;
}