let counter = 0; // Initialize a counter

function fireworks() {
    const result = document.getElementById("result");
    counter++; // Increment the counter

    const newParagraph = document.createElement("p"); // Create a new <p> element

    if (counter <= 5) {
        newParagraph.innerHTML = `NICE - fireworks!`; // Set the text for the <p> element
    } else {
        newParagraph.innerHTML = `WOW - It was the best concert in my life...`; // Final text
        clearInterval(intervalId); // Stop the interval
    }

    result.appendChild(newParagraph); // Append the new <p> element to the result div
}

window.onload = function () {
    // const result = document.getElementById("result");

    const initialParagraph = document.createElement("p"); // Create an initial <p> element
    initialParagraph.innerHTML = `OMG - Lady Gaga start singing!`; // Set the initial text
    result.appendChild(initialParagraph); // Append the initial <p> element to the result div

    // Call fireworks every 5 seconds
    intervalId = setInterval(fireworks, 5000);
};