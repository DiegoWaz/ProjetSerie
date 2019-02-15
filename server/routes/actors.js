const express = require("express");
const Actor = require('../models/actor');

const router = express.Router();

router.get('/', (req, res) => {
	Actor.find().then(data => res.send(data));
});

router.get('/:id', (req, res) => {
	Actor.findOne({id: req.params.id}).then(data => res.send(data));
});

module.exports = router;