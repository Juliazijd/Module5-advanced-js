const displayMovieGenres = items => {
        const movieGenres = items.genres;
        const genresList = document.getElementById('movie-genres');
        const genreNames = movieGenres.map(item => item.name);
        const genreId = movieGenres.map(item => item.id);

        for (i = 0; i < movieGenres.length; i++) {
            const genreListItems = document.createElement('li');
            genresList.appendChild(genreListItems);
            genreListItems.textContent = `genre naam: ${genreNames[i]}, id: ${genreId[i]}`;
    }
}
const displayMyTopMovie = data => {
    const topMovie = document.querySelector('#top-movie');
    topMovie.innerHTML = data.original_title;
}
const createTopRatedList = (movies, li) => {
    const topRatedMovies = movies.results;
    const movieTitles = topRatedMovies.slice(0, 10).map(movie => movie.title);
    for (i = 0; i < movieTitles.length; i++) {
        const topRatedListItem = document.createElement('li');
        li.appendChild(topRatedListItem);
        topRatedListItem.innerHTML = movieTitles[i];
    }
}
const displayTopRatedMovies = async (movies) => {
    const topRatedList = document.getElementById('top-rated');
    return createTopRatedList(movies, topRatedList);
}
const displayTopRatedActionMovies = (movies) => {
    const topRatedActionList = document.getElementById('top-rated-action');
    return createTopRatedList(movies, topRatedActionList);
}
const displayTopRated1975Movies = (movies) => {
    const topRated1975List = document.getElementById('top-rated-1975');
    return createTopRatedList(movies, topRated1975List);
}

getMovieGenres().then(displayMovieGenres);
getMyTopMovie().then(displayMyTopMovie);
getTopRatedMovies().then(displayTopRatedMovies);
getTopRatedActionMovies().then(displayTopRatedActionMovies);
getTopRated1975Movies().then(displayTopRated1975Movies);