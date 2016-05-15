// access the router object, so that we can add routes to it
var express = require('express');
var router = express.Router();
var controller = require('../controllers/discussions')

// todo, move this to the controller
router.get('/', function (req, res) {
    controller.getAll(req, res);
});

router.get('/:id', function (req, res) {
    //PARAMS: uit url
    controller.getDiscussion(req, res, req.params.id);
});

module.exports = router;