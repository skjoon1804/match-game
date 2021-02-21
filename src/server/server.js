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
    let { level, name, score } = easy;
    let db = await connectDB();
    let collection = db.collection(`record`);

    await collection.updateOne({level}, {$push: {record: {level, name, score}}});
    let updatedEasy = await collection.find({level}).toArray();
    
    let size = updatedEasy[0].record.length;
    if (size > 10) {
        let sortedEasy = updatedEasy[0].record.sort((a,b) => { return b.score - a.score; });
        let min = sortedEasy[sortedEasy.length - 1];
        await collection.updateOne({level}, {$pull: {record: {name: min.name, score: min.score}}});
    }
}

export const addMediumRecord = async medium => {
    let { level, name, score } = medium;
    let db = await connectDB();
    let collection = db.collection(`record`);

    await collection.updateOne({level}, {$push: {record: {level, name, score}}});
    let updatedEasy = await collection.find({level}).toArray();

    let size = updatedEasy[0].record.length;
    if (size > 10) {
        let sortedEasy = updatedEasy[0].record.sort((a,b) => { return b.score - a.score; });
        let min = sortedEasy[sortedEasy.length - 1];
        await collection.updateOne({level}, {$pull: {record: {name: min.name, score: min.score}}});
    }
}

export const addHardRecord = async hard => {
    let { level, name, score } = hard;
    let db = await connectDB();
    let collection = db.collection(`record`);

    await collection.updateOne({level}, {$push: {record: {level, name, score}}});
    let updatedEasy = await collection.find({level}).toArray();

    let size = updatedEasy[0].record.length;
    if (size > 10) {
        let sortedEasy = updatedEasy[0].record.sort((a,b) => { return b.score - a.score; });
        let min = sortedEasy[sortedEasy.length - 1];
        await collection.updateOne({level}, {$pull: {record: {name: min.name, score: min.score}}});
    }
}

export const addCrazyRecord = async crazy => {
    let { level, name, score } = crazy;
    let db = await connectDB();
    let collection = db.collection(`record`);

    await collection.updateOne({level}, {$push: {record: {level, name, score}}});
    let updatedEasy = await collection.find({level}).toArray();

    let size = updatedEasy[0].record.length;
    if (size > 10) {
        let sortedEasy = updatedEasy[0].record.sort((a,b) => { return b.score - a.score; });
        let min = sortedEasy[sortedEasy.length - 1];
        await collection.updateOne({level}, {$pull: {record: {name: min.name, score: min.score}}});
    }
}

// -----------------------

app.post('/record', async (req, res) => {
    let db = await connectDB();
    let record = await db.collection(`record`).find().toArray();
    res.status(200).send({record});
})

app.post('/easy', async (req, res) => {
    let record = req.body.record;
    await addEasyRecord(record);
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