const db = require('../libs/db');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LikeSchema = new Schema({

})

module.exports = db.model("Like", LikeSchema);