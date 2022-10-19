const main = document.getElementById('api_main');
const searchInput = document.getElementById('input_search');
const info = document.getElementById('information');


searchInput.addEventListener('keypress', filterDates)


window.addEventListener('DOMContentLoaded', () => {
    const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s'
    sendData(URL)
})


function filterDates(e) {

    if (e.key === 'Enter') {
        let searchURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${e.target.value}`
        sendData(searchURL);
    }

    info.textContent = 'Press enter to search...'
    main.innerHTML = ''
}


function sendData(data) {

    fetch(data)
        .then((data) => {
            fetchData(data)
        });
}


function fetchData(data) {
    let newURL = data.url;
    fetch(newURL)
        .then((response) => response.json())
        .then((data) => {
            data.drinks.map((element) => {
                createCards(element);
            })
        })
}


function createCards(element) {

    const card = document.createElement('div');
    const name_card = document.createElement('h2');
    card.classList.add('card');

    const img = document.createElement('img');
    img.setAttribute('src', element.strDrinkThumb);
    img.classList.add('img-card');

    name_card.classList.add('name-card');
    name_card.textContent = element.strDrink;

    card.appendChild(img)
    card.appendChild(name_card)
    main.appendChild(card)

    info.textContent = 'Popular Drinks';


}

