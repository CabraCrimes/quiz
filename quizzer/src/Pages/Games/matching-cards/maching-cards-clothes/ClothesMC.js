import React, {useState, useEffect} from "react";
import "./ClothesMC.css"
import MemoryGame from "../../../../components/memory/MemoryGame";
import MCClothesPexelsAPI from "../../../../api/MCClothesPexelsAPI.js";

const ClothesMC = () => {

    
const [memoryData, setMemoryData] = useState([]);
  
    useEffect(()=>{
        const fetchMemoryData = async () =>{
        const fetchedMemoryData = await MCClothesPexelsAPI();
        setMemoryData(fetchedMemoryData);
        }
    fetchMemoryData()
    },[]);

    console.log(memoryData)

    return(
        <>
        <h1>Clothes</h1>
        <div><MemoryGame memoryData={memoryData} /></div>
        </>
    )
}

export default ClothesMC;