var fs = require('fs');
var express = require('express');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
	res.render('index');
	});

app.post('/formsubmit', function(req, res) {
	res.redirect('/success');
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