// Part 1: display random dad joke by pressing button
const getData = async apiURL => {
	try {
		const res = await fetch(apiURL, {
			method: "GET",
			headers: {"Accept": "application/json"}
		});
		const json = await res.json();
		return json;
	} catch (error) {
		console.log('error');
	}
}
const  getRandomDadJoke = () => {
    const apiURL = 'https://icanhazdadjoke.com/';
    return getData(apiURL);
}
const displayDadJoke = data => {
	const jokeLine = document.createElement('p');
	const div = document.getElementsByTagName('div')[0];
	div.innerHTML = ' ';
	div.appendChild(jokeLine);
	jokeLine.innerHTML = data.joke;
}
document.querySelector('#dad-joke-button').addEventListener('click', () => {
	getRandomDadJoke().then(displayDadJoke);
});

// Part 2: display dad joke image
const displayDadJokeImage = data => {
	const image = document.createElement('img');
	const div = document.getElementsByTagName('div')[0];
	div.innerHTML = ' ';
	image.src = `https://icanhazdadjoke.com/j/${data.id}.png`
	div.appendChild(image);
}
document.querySelector('#dad-joke-image-button').addEventListener('click', () => {
	getRandomDadJoke().then(displayDadJokeImage);
});


// Extra part 2: display dad joke by search term
const getJokesBySearch = search => {
	const apiURL = `https://icanhazdadjoke.com/search?term=${search}`;
	return getData(apiURL);
}
const handleSearch = event => {
	event.preventDefault();
	let searchInput = document.querySelector('#search-input');
	return getJokesBySearch(searchInput.value).then(displayDadJokeBySearch);
}
const displayDadJokeBySearch = data => {
	let jokes = data.results;
	console.log(jokes);
	const div = document.getElementsByTagName('div')[0];
	div.innerHTML = ' ';
		for (i = 0; i < jokes.length; i++) {
			const p = document.createElement('p');
			div.appendChild(p);
			p.innerHTML = jokes[i].joke;
		}
};
const searchButton = document.querySelector('#input-form');
searchButton.addEventListener('submit', handleSearch);


