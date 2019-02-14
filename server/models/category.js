const db = require('../libs/db');
const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const CategorySchema = new Schema({
	name: String
})

module.exports = db.model("Category", CategorySchema);