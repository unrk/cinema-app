import { fetchTrendingMovies } from '../utils.js';

const movieList = document.querySelector('#trending-movies .movie-list');
const loadMoreButton = document.getElementById('load-more-trending');
let page = 1;

async function displayTrendingMovies() {
    const movies = await fetchTrendingMovies(page);
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <img src="${movie.Poster}" alt="${movie.Title}">
            <h3>${movie.Title}</h3>
            <a href="movie.html?id=${movie.imdbID}">Plus de détails</a>
        `;
        movieList.appendChild(movieCard);
    });
}

loadMoreButton.addEventListener('click', () => {
    page++;
    displayTrendingMovies();
});

displayTrendingMovies();
