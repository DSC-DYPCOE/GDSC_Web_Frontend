import { db } from '../firebase/connect'
import { collection, getDocs, query, where } from 'firebase/firestore'


export async function getTeamsData(teamName) {

    const localData = localStorage.getItem(teamName)
    if (localData){
        return JSON.parse(localData)
    }

    const dataRef = collection(db, "team")
    const query1 = query(dataRef, where("subteam", "==", teamName || "technical"))
    const data = await getDocs(query1)
    const formattedData = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
    localStorage.setItem(teamName, JSON.stringify(formattedData))
    return formattedData
    // console.log(dataRef);
}