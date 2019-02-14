const express = require("express");
const bodyparser = require("body-parser");
const MovieRouter = require('./routes/movies');
const security = require('./middleware/security');
const securityRouter = require('./routes/security');
const app = express();
const cors = require('cors');
const Movie = require('./models/movie');

app.use(cors());

const movie1 = new Movie();
movie1.title = "Test Movie";
movie1.year = 1930;
movie1.released = Date.now();

movie1.save(function(error, result){
    console.log("save");
    console.log(result);
});

app.use(bodyparser.json());
app.use(security.verifyToken);
app.use("/", securityRouter);
app.use('/movies', MovieRouter);

app.listen(3000, () => console.log('listening'));