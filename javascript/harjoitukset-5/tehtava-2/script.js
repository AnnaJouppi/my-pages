// Haetaan talotiedot
async function getJoke() {
    let response = await fetch('https://api.chucknorris.io/jokes/random');
    let data = await response.json();
    return data;
}

getJoke();

const joke = document.getElementById('joke');
const button = document.getElementById('button');
const image = document.getElementById('image');

// Napin painallus näyttää vitsin
button.addEventListener('click', async () => {
    const jokeData = await getJoke();
    joke.innerHTML = jokeData.value;
    image.src = jokeData.icon_url;
    image.alt = "Chuck Norris icon";
});