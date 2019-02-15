const db = require('../libs/db');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SerieSchema = new Schema({
	id: Number,
	name: String,
	number_of_episodes: Number,
    number_of_seasons: Number,
    poster_path: String,
	start_date: Date,
	country: String,
	next_episode: Object,
	seasons: Array
});

module.exports = db.model("Serie", SerieSchema);