import { fetchMovieDetails } from '../utils.js';

// je recupère les éléments du DOM
const movieDetailsContainer = document.querySelector('#movie-details .movie-details-container');


// affichage des détails d'un film
async function displayMovieDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('id');


    // je recupère les détails du film
    if (movieId) {
        const movie = await fetchMovieDetails(movieId);
        if (movie) {
            const detailsHTML = `
                <img src="${movie.Poster}" alt="${movie.Title}">
                <h2>${movie.Title}</h2>
                <p><strong>Plot:</strong> ${movie.Plot}</p>
                <p><strong>Genre:</strong> ${movie.Genre}</p>
                <p><strong>Actors:</strong> ${movie.Actors}</p>
                ${movie.Ratings && movie.Ratings.length > 0 ? `<p><strong>Ratings:</strong> ${movie.Ratings.map(rating => `${rating.Source}: ${rating.Value}`).join(', ')}</p>` : ''}
                ${movie.DVD !== "N/A" ? `<p><strong>DVD Release:</strong> ${new Date(movie.DVD).toLocaleDateString('en-GB')}</p>` : ''}
            `;
            movieDetailsContainer.innerHTML = detailsHTML;
        } else {
            movieDetailsContainer.innerHTML = '<p>Movie details not found.</p>';
        }
    } else {
         movieDetailsContainer.innerHTML = '<p>Invalid movie ID.</p>';
    }
}

displayMovieDetails();
