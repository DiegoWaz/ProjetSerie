const db = require('../libs/db');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EpisodeSchema = new Schema({
    id: Number,
    serie_id: Number,
    name: String,
    overview: String,
    season_number: Number,
    poster_path: String,
    start_date: Date,
    episode_number: Number,
});

module.exports = db.model("Episode", EpisodeSchema);