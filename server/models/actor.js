const db = require('../libs/db');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ActorsSchema = new Schema({
	firstname: String,
	lastname: String,
	dateBirthday: Date,
	nationality: String,
	cityBirth: String,
	picture: String
})

module.exports = db.model("Actors", ActorsSchema);