const db = require('../libs/db');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
	pseudo: String,
	dateBirthday: Date,
	nationality: String,
	cityBirth: String,
	picture: String
})

module.exports = db.model("Users", UsersSchema);