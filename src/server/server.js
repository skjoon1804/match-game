import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectDB } from './connect-db';
import path from 'path';


let port = process.env.PORT || 8889;
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

export const addNewUser = async user => {
    let db = await connectDB();
    let collection = db.collection(`users`);
    await collection.insertOne(user);
}

export const addNewGroup = async group => {
    let db = await connectDB();
    let collection = db.collection(`groups`);
    await collection.insertOne(group);
}

// -----------------------

app.post('/easy', async (req, res) => {
    
    res.status(200).send();
})

app.post('/medium', async (req, res) => {


})

app.post('/hard', async (req, res) => {


})

app.post('/crazy', async (req, res) => {


})


// ---------

app.post('/user/new', async (req, res) => {
    let user = req.body.user;
    let db = await connectDB();
    let collection = db.collection(`users`);
    let check = await collection.findOne({name: user.name});
    if (check) {
        res.status(500).send("User already exists!");
    } else {
        await addNewUser(user);
        res.status(200).send();
    }
})

app.post('/group', async (req, res) => {
    let group = req.body.group;
    await addNewGroup(group);
    res.status(200).send();
})
