var fs = require('fs');
var express = require('express');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
	fs.readFile('data.txt', function(err, data){
		res.header('Content-Type', 'text/html');
		res.send(data);
	})
});

app.post('/formsubmit', function(req, res) {
	res.redirect('/success');
	res.send(req.body);
	console.log(req.body);
	// fs.readFile('', function(err, data){	
	// })
});

app.get('/success', function(req, res){
	res.send('Heyoooooo!')
})


var server = app.listen(8111, function() {
	console.log('Express server listening on port ' + server.address().port);
});