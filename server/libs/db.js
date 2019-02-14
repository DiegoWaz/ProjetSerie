const mongoose = require('mongoose');

mongoose.connect("mongodb://mongo", {
    user: process.env.MONGODB_USER,
    pass: process.env.MONGODB_PASSWORD,
    dbName: process.env.MONGODB_DBNAME,
    useNewUrlParser: true,
});

const db = mongoose.connection;

db.on('error', function (err) {
	console.log('connection error', err);
});

db.once('open', function () { 
	console.log('connected');
});

module.exports = db;