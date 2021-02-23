import { MongoClient } from 'mongodb';

let url = (process.env.NODE_ENV === `production`) 
            ? `mongodb+srv://admin:admin@cluster0.mylms.mongodb.net/matchgamedb?retryWrites=true&w=majority`
            : `mongodb://localhost:27017/matchgamedb`;  
let db = null;

export async function connectDB() {
    if (db) return db;
    let client = await MongoClient.connect(url, { useNewUrlParer: true });
    db = client.db();
    console.info("Got DB,", db);
    return db;
}
connectDB();
