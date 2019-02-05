var http = require('http');
var express = require('express');
var Resource = require('express-resource');
var bodyParser= require('body-parser');
var methodOverride= require('method-override');
var path = require('path');
var app = express();

//Middlewares
app.use(bodyParser());
app.use(methodOverride());

//App Configurations
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//Application Controllers
app.resource('crud',require('./controllers/crud.js'));
app.resource(require('./controllers/default.js'));

//App settings
app.use(express.static(__dirname + '/views'));

//ORM Configurations
var waterlineConfig = require('./config/waterline')
, waterlineOrm = require('./init/models').waterlineOrm;
var modelPath = path.join(__dirname, '/models');
require('./init/models')(modelPath);

//ORM Initialization 
waterlineOrm.initialize(waterlineConfig, function (err, models) {
    if (err) throw err;

    db = function (table) { return models['collections'][table]; };
    db.collections = models.collections;
    db.connections = models.connections;

    http.createServer(app).listen(32000, function () {
        console.log('Express server listening on port ' + 32000);
    });
});