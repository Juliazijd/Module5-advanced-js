let API_KEY = '70d4193ad40695431fd1c857d37aacc4';

async function getData() {
    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
    console.log(apiUrl);
        try {
        let res = await fetch(apiUrl)
        console.log(res);
        } catch  {
            console.log('error');
        }
}
