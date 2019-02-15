const db = require('../libs/db');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SeasonSchema = new Schema({
    id: Number,
    serie_id: Number,
    name: String,
    season_number: Number,
    poster_path: String,
    start_date: Date,
    overview: String,
    episodes: Array
});

module.exports = db.model("Season", SeasonSchema);