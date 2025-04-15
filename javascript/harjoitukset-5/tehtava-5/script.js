async function getNames() {
    let response = await fetch('names.json');
    let data = await response.json();
    console.log(data);
    return data;
}

document.addEventListener("DOMContentLoaded", async () => {
    const names = await getNames();
    const searchInput = document.getElementById("search");
    const resultsDiv = document.getElementById("results");
    let currentIndex = -1; // seuraa korostettua nimeä

    searchInput.addEventListener("keyup", (event) => {
       

        const query = searchInput.value.toLowerCase();

        // Nuolinäppäinten painaminen
        if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            const resultItems = resultsDiv.querySelectorAll("div");

            if (resultItems.length > 0) {
                if (currentIndex >= 0) {
                    resultItems[currentIndex].classList.remove("highlight");
                }

                if (event.key === "ArrowDown") {
                    currentIndex = (currentIndex + 1) % resultItems.length;
                } else if (event.key === "ArrowUp") {
                    currentIndex = (currentIndex - 1 + resultItems.length) % resultItems.length;
                }

                resultItems[currentIndex].classList.add("highlight");
                return;
            }
        }

        // Siirrä korostettu nimi hakukenttään
        if (event.key === "Enter") {
            const resultItems = resultsDiv.querySelectorAll("div");
            

            if (resultItems[currentIndex]) {
                searchInput.value = resultItems[currentIndex].textContent;
                resultsDiv.innerHTML = ""; // Tyhjää tulosalue
                currentIndex = -1;
            }
        }
            // Tyhjää tulosalue ja hakukenttä jos painetaan Esciä
        if (event.key === "Escape") {
            resultsDiv.innerHTML = ""; 
            searchInput.value = "";
            currentIndex = -1;
        }

        // Tyhjää tulosalue
        resultsDiv.innerHTML = "";
        currentIndex = -1;

        if (query) {
            const filteredNames = names.filter(name => name.toLowerCase().startsWith(query));
            filteredNames.forEach(name => {
                const nameElement = document.createElement("div");
                nameElement.textContent = name;

                resultsDiv.appendChild(nameElement);
            });
        }
    });
});


