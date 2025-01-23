const API_KEY = 'd567517b';
const year = '2024';

export async function fetchTrendingMovies(year, page = 1) {
    try {
        const response = await fetch(`https://www.omdbapi.com/?y=2024&s=movie&apikey=${API_KEY}&page=${page}&type=movie`); 
        const data = await response.json();
        console.log('Trending movies data:', data);
        if (data.Search) {
            return data.Search;
        } else {
            return [];
        }
    } catch (error) {
        console.error('Error fetching trending movies:', error);
        return [];
    }
}

export async function searchMovies(query, page = 1) {
    try {
        const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}&page=${page}`);
         const data = await response.json();
        if (data.Search) {
            return data.Search;
        } else {
            return [];
        }
    } catch (error) {
        console.error('Error searching movies:', error);
        return [];
    }
}

export async function fetchMovieDetails(id) {
    try {
        const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching movie details:', error);
        return null;
    }
}
