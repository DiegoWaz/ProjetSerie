const express = require("express");
const Serie = require('../models/serie');

const router = express.Router();

router.get('/', (req, res) => {
	Serie.find().then(data => res.send(data));
})

router.get('/:title', (req, res) => {
	Serie.findOne({title: req.params.title}).then(data => res.send(data));
})

module.exports = router;