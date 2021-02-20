import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectDB } from './connect-db';
import path from 'path';


let port = process.env.PORT || 8888;
let app = express();

app.use(
    cors(),
    bodyParser.urlencoded({extended: true}),
    bodyParser.json()
);
app.listen(port, console.log("Server listening on port", port));


if (process.env.NODE_ENV == `production`) {
    app.use(express.static(path.resolve(__dirname, `../../dist`)));
    app.get('/*', (req, res) => {
        res.sendFile(path.resolve('index.html'));
    });
}

export const addEasyRecord = async easy => {
    let db = await connectDB();
    let collection = db.collection(`easy`);

    await collection.insertOne(easy);
    let stats = await collection.stats();
    let size = stats.count;

    if (size > 10) {
        // TODO: remove smallest element

        let temp = await collection.find({}).sort({"score": -1}).toArray();
        console.log("xxxxxxxx")
        console.log(temp);
        console.log("yyyyyyyyy")


        await collection.find({}).sort({"score":-1});
        let b = await collection.updateOne({}, {$pop:{score: 1}});
        console.log("ccccccccc");
        console.log(b);
        console.log("dddddddddddd");
    }
    


    // TODO
    // display records in order when first fetched

    

}

export const addMediumRecord = async medium => {
    let db = await connectDB();
    let collection = db.collection(`medium`);
    // TODO
    await collection.insertOne(medium);
}

export const addHardRecord = async hard => {
    let db = await connectDB();
    let collection = db.collection(`hard`);
    // TODO
    await collection.insertOne(hard);
}

export const addCrazyRecord = async crazy => {
    let db = await connectDB();
    let collection = db.collection(`crazy`);
    // TODO
    await collection.insertOne(crazy)
}

// -----------------------

app.post('/record', async (req, res) => {
    let db = await connectDB();

    let easy = await db.collection(`easy`).find().toArray();
    let medium = await db.collection(`medium`).find().toArray();
    let hard = await db.collection(`hard`).find().toArray();
    let crazy = await db.collection(`crazy`).find().toArray();

    let record = { easy, medium, hard, crazy };
    res.status(200).send(record);
})

app.post('/easy', async (req, res) => {
    let easy = req.body.easy;
    await addEasyRecord(easy);
    res.status(200).send();
})

app.post('/medium', async (req, res) => {
    let medium = req.body.medium;
    await addMediumRecord(medium);
    res.status(200).send();
})

app.post('/hard', async (req, res) => {
    let hard = req.body.hard;
    await addHardRecord(hard);
    res.status(200).send();
})

app.post('/crazy', async (req, res) => {
    let crazy = req.body.crazy;
    await addCrazyRecord(crazy);
    res.status(200).send();
})