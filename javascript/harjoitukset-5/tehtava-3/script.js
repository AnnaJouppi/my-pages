
async function getCrypto() {
    let response = await fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=EUR');
    let data = await response.json();
    console.log(data);
    return data;
}

getCrypto();

const bitcointext = document.getElementById('bitcointext');
const button = document.getElementById('button');


button.addEventListener('click', async () => {
    const bitcoin = await getCrypto();
    const bitcoinValue = bitcoin.BTC.EUR;
    bitcointext.innerHTML = `Bitcoinin arvo on ${bitcoinValue} €`;    
});