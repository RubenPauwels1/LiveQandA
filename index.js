var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodeINTRO');

// parse application/json , define this BEFORE adding routes
app.use(bodyParser.json());

app.set('view engine', 'pug');

app.use('/', require('./routers/index'));
app.use('/messages', require('./routers/messages'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});