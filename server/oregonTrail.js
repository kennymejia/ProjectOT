const express = require('express');
const app = express();
const port = 1337;
var bodyParser = require('body-parser');
app.use(bodyParser.json({type:'application/json'}));

app.use(express.static('client/public'))

app.get('/', function (req, res) { 
	res.sendFile('index.html', {root: './client/views'}) })

app.get('/mainmenu.html', function (req, res) { 
	res.sendFile('mainmenu.html', {root: './client/views'}) })

app.get('/setup.html', function (req, res) { 
	res.sendFile('setup.html', {root: './client/views'}) })

app.get('/trail.html', function (req, res) { 
	res.sendFile('trail.html', {root: './client/views'}) })

app.get('/topten.html', function (req, res) { 
	res.sendFile('topten.html', {root: './client/views'}) })

app.listen(port, () => console.log(`Oregon Trail App Listening On Port ${port}!`))

var topTenController = require('./controllers/topTenController');

app.route('/api/topTen/topTen')
	.get(topTenController.getCurrentScores)
	.post(topTenController.saveCurrentScore)

	app.route('/api/topTen/topTen/:userID')
	.get(topTenController.getCurrentScore)
	.delete(topTenController.deleteCurrentScore)
