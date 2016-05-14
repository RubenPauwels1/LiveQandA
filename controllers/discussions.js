var Discussion = require('../models/discussions');

function create (newDiscussion, returnDiscussion){

    console.log('create fired!');
	// save a new instance of this model
	var newDiscussion = new Discussion({
		//user: req.body.user,
		discussion: newDiscussion
	});
    
    console.log('Discussion: ' + newDiscussion);
	
	newDiscussion.save(function (err, discussion) {
	  if (err) return console.error(err);
        console.log("Saved " + discussion);
        returnDiscussion(discussion);
	});
}

module.exports.create = create;

function getAll (req, res) {
	Discussion.find( function(err, discussions){
		if (err) return console.error(err);
        console.log(discussions);
		return res.render('discussion', {discussions: discussions});
	});
}

module.exports.getAll = getAll;