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
app.route('/api/topTen/list')
	.get(topTenController.getCurrentScores)
app.route('/api/topTen/newPlayer')	
	.post(topTenController.saveCurrentScore)

var gameController = require('./controllers/gameController');
app.route('/api/game/pace')
	.post(gameController.changePace)
app.route('/api/game/update')
	.get(gameController.updateGame)
app.route('/api/game/reset')
	.post(gameController.resetGame)
app.route('/api/game/get')
	.get(gameController.getGameData)

var setupController = require('./controllers/setupController');
app.route('/api/setup/player')
	.post(setupController.assignPlayerName)
app.route('/api/setup/profession')
	.post(setupController.assignProfession)
app.route('/api/setup/month')
	.post(setupController.startMonth)
app.route('/api/setup/screen/:id')
	.get(setupController.getGameScreen)
app.route('/api/setup/data')
	.get(setupController.userData)