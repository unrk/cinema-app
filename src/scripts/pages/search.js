import { searchMovies } from '../utils.js';


// je recupère les éléments du DOM
const searchBar = document.getElementById('search-bar');
const searchResults = document.getElementById('search-results');
const loadMoreButton = document.getElementById('load-more-search');
let page = 1;
let searchTerm = '';


// affichage des résultats de recherche
async function displaySearchResults() {
    const movies = await searchMovies(searchTerm, page);
    if (movies && movies.length > 0) {
        movies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');
            movieCard.innerHTML = `
                <img src="${movie.Poster}" alt="${movie.Title}">
                <h3>${movie.Title}</h3>
                <a href="movie.html?id=${movie.imdbID}">Details</a>
            `;
            searchResults.appendChild(movieCard);
        });

    // j'affiche un message si il n'y a pas de résultats
    } else if (page === 1 && searchResults.children.length === 0) {
        searchResults.innerHTML = '<p>Pas de résultats.</p>';
    }
}


// je recupère les résultats de recherche à chaque fois que l'utilisateur tape quelque chose dans la barre de recherche
searchBar.addEventListener('input', () => {
    searchTerm = searchBar.value.trim();
    searchResults.innerHTML = '';
    page = 1;
    if (searchTerm) {
        displaySearchResults();
    }
});

loadMoreButton.addEventListener('click', () => {
    page++;
    displaySearchResults();
});
