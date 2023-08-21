import { collection, getDocs, query } from "@firebase/firestore";
import { db } from "../firebase/connect";

export async function getProjects() {
    const collectionRef = collection(db, "projects")
    const data = await getDocs(collectionRef)
    const formattedData = data.docs.map(doc => ({...doc.data(), id: doc.id}))
    return formattedData
}