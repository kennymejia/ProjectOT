const express = require('express')
const app = express()
const port = 1337

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

app.use(express.static('client/public'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))