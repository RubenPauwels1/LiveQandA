var mongoose = require('mongoose');

// add one message to the database
// first, we define a mongoose schema
var messageSchema = mongoose.Schema({
	user: String,
	message: String
});
// then we compile this schema into a model
var Message = mongoose.model('Message', messageSchema);

module.exports = Message;