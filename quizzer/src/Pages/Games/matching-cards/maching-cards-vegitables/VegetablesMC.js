import React, { useState, useEffect } from "react";
import "./VegetablesMC.css";
import MemoryGame from "../../../../components/memory/MemoryGame";
import MCCVegetablesPexelsAPI from "../../../../api/MCVegetablesPexels";

const VegetablesMC = () => {
  const [memoryData, setMemoryData] = useState([]);

  useEffect(() => {
    const fetchMemoryData = async () => {
      const fetchedMemoryData = await MCCVegetablesPexelsAPI();
      setMemoryData(fetchedMemoryData);
    };
    fetchMemoryData();
  }, []);

  return (
    <>
      <h1>Vegetables</h1>
      <div>
        <MemoryGame memoryData={memoryData} />
      </div>
    </>
  );
};

export default VegetablesMC;
