let API_KEY = '70d4193ad40695431fd1c857d37aacc4';

const getData = async apiURL => {
	try {
		const res = await fetch(apiURL, {
			method: "GET",
		});
		const json = await res.json();
		return json;
	} catch (error) {
		console.log(error);
	}
}
const getMovieGenres = async () => {
	const apiURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
	return getData(apiURL);
}
const getMyTopMovie = async () => {
    let imdbID = 'tt5311542'; 
    const apiURL = `https://api.themoviedb.org/3/movie/${imdbID}?api_key=${API_KEY}`;
    return getData(apiURL);
}
const getTopRatedMovies = async () => {
    const apiURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;
    return getData(apiURL);
}
const  getTopRatedActionMovies = async () => {
    const apiURL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=18`;
    return getData(apiURL);
}
const  getTopRated1975Movies = async () => {
    const apiURL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_year=1975`;
    return getData(apiURL);
}


