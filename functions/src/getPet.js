import { dbConnect } from "./dbconnect.js";

export async function getPet(req, res) {
  const db = dbConnect();
  const userId = req.params.id;
  const collection = await db
    .collection("Pet")
    .get()
    .catch((err) => res.status(500).send(err));
  const pets = collection.docs.map((doc) => {
    const pet = doc.data();
    pet.id = doc.id;
    if (!pet.id) {
      res.status(404).send({ error: "No pet matchting this ID" });
    } else if (pet.id != userId) {
      res.status(401).send({ error: "Please recheck pet ID" });
    } else {
      return pet;
    }
  });
  res.send(pets);
}
