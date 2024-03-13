import React,{useState, useEffect} from "react";
import MemoryGame from "../../../../components/memory/MemoryGame.js";
import PexelsAPI from "../../../../api/MCAnimalsPexelsAPI.js";
import "./AnimalMC.css";


const AnimalMC = () => {
  const [memoryData, setMemoryData] = useState([]);
  
  useEffect(()=>{
    const fetchMemoryData = async () =>{
      const fetchedMemoryData = await PexelsAPI();
      setMemoryData(fetchedMemoryData);
    }
    fetchMemoryData()
  },[]);
  // console.log(memoryData.map(e=> e.src.medium))

  return (
    <>
    <h1>Animals</h1>
      <div>
        <MemoryGame memoryData={memoryData} />
      </div>
    </>
  );
};

export default AnimalMC;
