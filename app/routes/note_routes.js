const objectID = require('mongodb').ObjectID;
module.exports = function (app, db) {

    app.get('/', (req, res) => {

res.send("hello hamza, this is default root route");
    });



    //this is the find ROUTE   
    app.get('/notes/:id', (req, res) => {

        const id = req.params.id;
        const details = { '_id': new objectID(id) };
        const collection1 = db.collection("notess");

        collection1.findOne(details, (err, item) => {

            if (err) { res.send('error'); }
            else {
                res.send(item);
                console.log("here");

                console.log(id);
                console.log(details);
            }

        });

    });


    app.get('/all', (req, res) => {

       // const id = req.params.id;
       // const details = { '_id': new objectID(id) };
        const collection1 = db.collection("notess");
        // res.send("hello");
        // res.send(collection1.find());

        collection1.find({}).toArray((err,item)=>{
            if (err) { res.send('error'); }
            else {
                res.send(item);
            }
        });
    });
        // });
        // collection1.findOne(details, (err, item) => {

        //     if (err) { res.send('error'); }
        //     else {
        //         res.send(item);
        //         console.log("here");

        //         console.log(id);
        //         console.log(details);
        //     }

        // });


    //this is the delete ROUTE
    app.delete('/notes/:id', (req, res) => {

        const id = req.params.id;
        const details = { '_id': new objectID(id) };
        const collection1 = db.collection("notess");

        collection1.remove(details, (err, item) => {

            if (err) { res.send('error'); }
            else {
                res.send('note ' + id + ' deleted');

            }

        });

    });

    //this is update route
    app.put('/notes/:id', (req, res) => {

        const id = req.params.id;
        const details = { '_id': new objectID(id) };
        const collection1 = db.collection("notess");
        const note = { text: req.body.body, title: req.body.title };

        collection1.update(details, note, (err, item) => {

            if (err) { res.send('error'); }
            else {
                res.send(item);
                console.log(details);
            }

        });

    });

    //This is the insert ROUTE
    app.post('/notes', (req, res) => {
        const note = { text: req.body.body, title: req.body.title };
        const collection1 = db.collection("notess");

        collection1.insert(note, (err, result) => {
            if (err) { res.send('error'); }
            else { res.send(result.ops[0]); }
        });
        // console.log(note);
    });
}


