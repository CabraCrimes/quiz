import React,{useState, useEffect} from "react";
import MemoryGame from "../../../../components/memory/MemoryGame";
import PexelsAPI from "../../../../api/PexelsAPI";
import "./Memory.css";


const Memory = () => {
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

export default Memory;
