const express = require("express");
const Serie = require('../models/serie');
const Season = require('../models/season');
const Episode = require('../models/episode');

const router = express.Router();

//GET ONE SERIE
router.get('/:id', (req, res) => {
	Serie.find({id: req.params.id}).then(data => res.send(data));
});

//ADD ONE SERIE WITH POST

router.post('/', (req, res) => {
    res.send(req.body);
    const serie1 = new Serie();
	serie1.name = req.body.name;
	serie1.number_of_episodes = req.body.number_of_episodes;
    serie1.number_of_seasons = req.body.number_of_seasons;
    serie1.poster_path = req.body.poster_path;
    serie1.country = req.body.country;
	serie1.save(function(error, result){
	});
	res.send(serie1);
})

//GET ALL SERIES
router.get('/', (req, res) => {
    Serie.find().then(data => res.send(data));
});

// GET Season
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