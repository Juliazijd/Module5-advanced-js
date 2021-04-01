let API_KEY = '70d4193ad40695431fd1c857d37aacc4';

async function getData() {
    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
        try {
        let res = await fetch(apiUrl);
        return res;
        } catch  {
            console.log('error');
        }
}
