import functions from 'firebase-functions';
import express from "express";
import cors from "cors";
import { getPet } from './src/getPet.js';

const app = express();
app.use(cors());
app.use(express.json())

app.get("/main/:id", getPet)


export const api = functions.https.onRequest(app)


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
