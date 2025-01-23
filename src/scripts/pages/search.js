import { searchMovies } from '../utils.js';

const searchBar = document.getElementById('search-bar');
const searchResults = document.getElementById('search-results');
const loadMoreButton = document.getElementById('load-more-search');
let page = 1;
let searchTerm = '';

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
    } else if (page === 1) {
        searchResults.innerHTML = '<p>No results found.</p>';
    }
}

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
