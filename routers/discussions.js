// access the router object, so that we can add routes to it
var express = require('express');
var router = express.Router();
var controller = require('../controllers/discussions')

// todo, move this to the controller
router.get('/', function (req, res) {
	var id = req.params.id;
	console.log(id);
    controller.getAll(req, res);
});

module.exports = router;