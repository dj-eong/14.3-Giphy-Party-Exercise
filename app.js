const form = document.querySelector('form');
const removeButton = document.querySelector('#remove');
const results = document.querySelector('#results');

form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const input = form.firstElementChild.value;
    if (input == '') { return; };

    appendImage(await searchImage(input));

    form.firstElementChild.value = '';
});

async function searchImage(input) {
    const apiKey = 'w6EAWW78wKvItSZXgL1JXRIsrlty5kQr';
    const config = { params: { q: `${input}`, api_key: apiKey } };
    const res = await axios.get('https://api.giphy.com/v1/gifs/search', config);
    if (res.data.data.length == 0) return "https://media3.giphy.com/media/3o6Zt7npmUtWmmQ2kw/giphy.gif?cid=482277c2ozoxyk9o31vnnv7c1fbhih8wd9en48pngt6zhmza&rid=giphy.gif&ct=g";
    const url = res.data.data[Math.floor(Math.random() * res.data.data.length)].images.original.url;
    return url;

}

function appendImage(url) {
    const image = document.createElement('img');
    image.setAttribute('src', url);
    image.classList.add('m-1');
    results.append(image);
}

removeButton.addEventListener('click', function (e) {
    results.innerHTML = '';
});

//w6EAWW78wKvItSZXgL1JXRIsrlty5kQr

//api.giphy.com/v1/gifs/search