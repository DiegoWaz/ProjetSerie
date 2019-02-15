const express = require("express");
const Serie = require('../models/serie');
const Season = require('../models/season');
const Episode = require('../models/episode');

const router = express.Router();

router.get('/:id', (req, res) => {
	Serie.find({id: req.params.id}).then(data => res.send(data));
});

router.get('/', (req, res) => {
    Serie.find().then(data => res.send(data));
});

// Season
router.get('/:serieid/season/:seasonid', (req, res) => {
    Season.find({serie_id: req.params.serieid, season_number: req.params.seasonid}).then(data => res.send(data));
});

// Season Episode
router.get('/:serieid/season/:seasonid/episode/:episodeid', (req, res) => {
    Episode.find({serie_id: req.params.serieid, season_number: req.params.seasonid, episode_number:req.params.episodeid}).then(data => res.send(data));
});


router.get('/:title', (req, res) => {
    Serie.findOne({title: req.params.title}).then(data => res.send(data));
});

module.exports = router;