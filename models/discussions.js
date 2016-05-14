var mongoose = require('mongoose');

// add one message to the database
// first, we define a mongoose schema
var discussionSchema = mongoose.Schema({
	discussion: String
    //answers: Array
});
// then we compile this schema into a model
var Discussion = mongoose.model('Discussion', discussionSchema);

module.exports = Discussion;