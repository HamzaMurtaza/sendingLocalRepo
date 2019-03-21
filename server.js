const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));


mongoClient.connect(db.url, (err, database) => {

    if (err) return console.log(err);
const db=database.db('apiData');
    require('./app/routes')(app,db);
    app.listen(8000, (req, res) => {

        console.log("server up. Listening... ");

    }); 


});


//run the app by 'npm run dev'
//checking change in status of git
