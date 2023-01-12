import { dbConnect } from "./dbconnect.js";

export async function getPet(req, res){
    const db = dbConnect();
    const collection = await db.collection('Pet').get()
        .catch(err => res.status(500).send(err));
    const pets = collection.docs.map(doc => {
        let pet = doc.data();
        pet.id = doc.id
        return pet
    })
    res.send(pets)
}