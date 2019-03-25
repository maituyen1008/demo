var express = require('express');
var path = require('path');
var bodyparser = require('body-parser');
var app = express();
var server = require('http').createServer(app);

var port = process.env.PORT || 8000;

var router = require('./routes/router')

app.set('views', path.join(__dirname, 'views'));
app.engine('html',require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use('/', router);

server.listen(port);