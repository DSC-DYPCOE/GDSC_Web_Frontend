import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../firebase/connect";

export async function getEventsData(type) {
    const eventType = type+"Events"
    const localData = localStorage.getItem(eventType)
    if (localData){
        return JSON.parse(localData)
    }
    const ref = collection(db, "events")
    const getQuery = query(ref, where("type", "==", type), orderBy("order", "desc"))
    const data = await getDocs(getQuery)
    const formattedData = data.docs.map((doc) => ({...doc.data(), id: doc.id})) 
    localStorage.setItem(eventType, JSON.stringify(formattedData))
    return formattedData   
}