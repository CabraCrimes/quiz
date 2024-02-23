import React,{useState, useEffect} from "react";
import MemoryGame from "../../../components/memory/MemoryGame";
import PexelsAPI from "../../../api/PexelsAPI";
import "./Memory.css";


const Memory = () => {
  const [memoryData, setMemoryData] = useState([]);
  
  useEffect(()=>{
    const fetchMemoryData = async () =>{
      const fetchedMemoryData = await PexelsAPI();
      // console.log(fetchedMemoryData.photos[0].src.medium)
      setMemoryData(fetchedMemoryData.photos[0].src.medium)
    }
    fetchMemoryData()
  },[]);
  
  console.log(memoryData)

  return (
    <>
      <div>
        <MemoryGame memoryData={memoryData} />
      </div>
    </>
  );
};

export default Memory;
