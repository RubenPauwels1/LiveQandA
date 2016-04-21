// access the router object, so that we can add routes to it
var express = require('express');
var router = express.Router();
var controller = require('../controllers/message')

// todo, move this to the controller
router.get('/:id', function (req, res) {
	var id = req.params.id;
	console.log(id);
	res.send("GET message with :id " + id);
});

router.post('/', controller.create);
router.get('/', controller.getAll);

module.exports = router;