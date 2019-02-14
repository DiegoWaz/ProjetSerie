const express = require("express");
const bodyparser = require("body-parser");
const MovieRouter = require('./routes/movies');
const security = require('./middleware/security');
const securityRouter = require('./routes/security');
const app = express();
const cors = require('cors');
const Movie = require('./models/movie');
const Serie = require('./models/serie');
const Actor = require('./models/actor');
app.use(cors());

const actor1 = new Actor();
actor1.firstname = "John";
actor1.lastname = "Doe";
actor1.dateBirthday = Date.now();
actor1.nationality = "french";
actor1.cityBirth = "Paris";
actor1.picture = "picture.png";

const serie1 = new Serie();
serie1.title = "Test serie 2";
serie1.year = 1930;

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
app.use('/series', SerieRouter);
app.use('/actors', ActorRouter);

app.listen(3000, () => console.log('listening'));