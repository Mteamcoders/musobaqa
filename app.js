let options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '86ec9e159bmsh9da1b9590d1d752p11301bjsnc7de21b1f1d7',
		'X-RapidAPI-Host': 'unogsng.p.rapidapi.com'
	}
};

fetch('https://unogsng.p.rapidapi.com/genres', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

