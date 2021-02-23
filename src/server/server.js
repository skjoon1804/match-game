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

export const addRecord = async record => {
    let { level, name, score } = record;
    let db = await connectDB();
    let collection = db.collection(`record`);

    await collection.updateOne({level}, {$push: {record: {level, name, score}}});
    let updated = await collection.find({level}).toArray();

    let size = updated[0].record.length;
    if (size > 10) {
        let sorted = updated[0].record.sort((a,b) => { return b.score - a.score; });
        let min = sorted[sorted.length - 1];
        await collection.updateOne({level}, {$pull: {record: {name: min.name, score: min.score}}});
    }
}

// -----------------------

app.post('/record/get', async (req, res) => {
    let db = await connectDB();
    let record = await db.collection(`record`).find().toArray();
    res.status(200).send({record});
})

app.post('/record/add', async (req, res) => {
    let record = req.body.record;
    await addRecord(record);
    res.status(200).send();
})