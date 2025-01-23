import { fetchTrendingMovies } from '../utils.js';


// je recupère les éléments du DOM
const movieList = document.querySelector('#trending-movies .movie-list');
const loadMoreButton = document.getElementById('load-more-trending');
let page = 1;


// affichage des films populaires
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


// ajout d'un boutton pour charger plus de films
loadMoreButton.addEventListener('click', () => {
    page++;
    displayTrendingMovies();
});

displayTrendingMovies();
