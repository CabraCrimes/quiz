import React, { useState, useEffect } from "react";
import "./VegetablesMC.css";
import MemoryGame from "../../../../components/memory/MemoryGame";
import MCCVegetablesPexelsAPI from "../../../../api/MCVegetablesPexels";
import AstroLoader from "../../../../components/loading-indicator/AstroLoader";

const VegetablesMC = () => {
  const [memoryData, setMemoryData] = useState([]);

  useEffect(() => {
    const fetchMemoryData = async () => {
      const fetchedMemoryData = await MCCVegetablesPexelsAPI();
      setMemoryData(fetchedMemoryData);
    };
    fetchMemoryData();
  }, []);

  const loading = memoryData.length === 0;

  return (
    <>
      <h1>Vegetables</h1>
      <div>
       {loading && <AstroLoader/>} <MemoryGame memoryData={memoryData} />
      </div>
    </>
  );
};

export default VegetablesMC;
