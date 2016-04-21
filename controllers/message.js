var Message = require('../models/message');

function create (req, res){

	// save a new instance of this model
	var newMessage = new Message({
		user: req.body.user,
		message: req.body.message
	});
	
	newMessage.save(function (err, message) {
	  if (err) return console.error(err);
	  res.send(message);
	});
}
module.exports.create = create;

function getAll (req, res) {
	Message.find( function(err, messages){
		if (err) return console.error(err);
		res.send(messages);
	});
}
module.exports.getAll = getAll;