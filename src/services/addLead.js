import { collection, addDoc } from "firebase/firestore";
import db from '../firebase'


export default async (payload) => {
    const date = new Date()
    const collectionRef = collection(db, "leads");
    const docRef = await addDoc(collectionRef, {...payload, createdIn: date});
    console.log("The new ID is: " + docRef.id);
}