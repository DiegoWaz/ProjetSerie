const express = require("express");
const Serie = require('../models/saisons');

const router = express.Router();

router.get('/:id', (req, res) => {
    Serie.findById(req.params.id).then(data => res.send(data));
});

router.get('/', (req, res) => {
    Serie.find().then(data => res.send(data));
});

module.exports = router;