// Värikoodin tulostus tulosalueelle

function changeColor() {
    const colorSelect = document.getElementById("colorSelect");
    const selectedColor = colorSelect.value; // Get the selected color value
    const colorCodeDiv = document.getElementById("colorcode");

    switch (selectedColor) 
    {
        case "yellow":
            colorCodeDiv.textContent = "Valittu: #FFFF00";
            break;
        case "pink":
            colorCodeDiv.textContent = "Valittu:#f9a7a7";
            break;
        case "green":
            colorCodeDiv.textContent = "Valittu: #00FF00";
            break;
        case "purple":
            colorCodeDiv.textContent = "Valittu: #800080";
            break;
        default:
            colorCodeDiv.textContent = "Valittu: #FFFF00";
    }

}

// Tulosalueen taustavärin vaihto
function changeBgColor() {
    const colorSelect = document.getElementById("colorSelect");
    const selectedColor = colorSelect.value; // Get the selected color value
    const resultarea = document.getElementById("resultarea");

    switch (selectedColor) 
    {
        case "yellow":
            resultarea.style.backgroundColor = "#FFFF00";
            break;
        case "pink":
            resultarea.style.backgroundColor = "#f9a7a7";
            break;
        case "green":
            resultarea.style.backgroundColor = "#00FF00";
            break;
        case "purple":
            resultarea.style.backgroundColor = "#800080";
            break;
        default:
            body.style.backgroundColor = "none";
    }
}

// Tekstin tulostus tulosalueelle reaaliaikaisesti
document.getElementById("party").addEventListener("input", function () {
    const inputText = this.value; // Get the current value of the input field
    const chosenPartyDiv = document.getElementById("chosenparty");

    // Update the chosenparty div with the input text
    chosenPartyDiv.textContent = `Juhla: ${inputText}`;
});