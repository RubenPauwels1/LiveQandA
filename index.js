//EXPRESS
var express = require('express');
var app = express();

//SOCKET IO
var http = require('http').Server(app);
var io = require('socket.io')(http);


var controller = require('./controllers/discussions');

//BODYPARSER
var bodyParser = require('body-parser');

//MONGOOSE
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/QA');

// parse application/json , define this BEFORE adding routes
app.use(bodyParser.json());

//PUG
app.set('view engine', 'pug');

app.use('/', require('./routers/index'));
app.use('/discussions', require('./routers/discussions'));

io.on('connection', function(socket){
  socket.on("New Discussion", function(newDiscussion){
      controller.create(newDiscussion, function(returnDiscussion){
        console.log(returnDiscussion);
        io.emit("newDiscussionInDB", returnDiscussion);
      });
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});