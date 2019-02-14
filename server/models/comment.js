const db = require('../libs/db');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommentSchema = new Schema({

})

module.exports = db.model("Comment", CommentSchema);