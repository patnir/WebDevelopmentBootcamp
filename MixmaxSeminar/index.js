console.log('hello world');


const express = require('express');
const app = express();
const hbs = require('hbs');
const request = require('request');

const PORT = 3000;

// function foo() {
// 	console.log("listenting on port", PORT);
// }

function getGifs(callback) {
	const giphyKey = 'dc6zaTOxFJmzC';

	request({
		url: 'httpL//api.giphy.com/vi/gifs/search',
		q : {
			api_key: giphyKey,
			tags: 'cats',
			limit: 6,
			rating: 'pg'
		}
	}, callback);
}

app.get('/', (req, res) => {
	res.send('<html>hello world 2</html>');
});

app.get('/search', (req, res) => {
	//res.send('hello world 4');
	// res.render('index');
	getGifs((err, data, body) =>  {
		
		res.render('index');
		console.log('body', body);
	})
});


app.listen(3000, () => {
	console.log("listenting on port", PORT);
}); // anonymous function

// app.listen(3000, foo); 

// foo is a callback function

app.set('view engine', 'html');
app.engine('html', hbs.__express);

// express will look for htm l fiels and 