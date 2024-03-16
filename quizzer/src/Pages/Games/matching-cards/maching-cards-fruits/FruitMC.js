import React, { useState, useEffect } from "react";
import "./FruitMC.css";
import MemoryGame from "../../../../components/memory/MemoryGame";
import MCCFruitPexelsAPI from "../../../../api/MCFruitPexelsAPI";
const FuitMC = () => {
  const [memoryData, setMemoryData] = useState([]);

  useEffect(() => {
    const fetchMemoryData = async () => {
      const fetchedMemoryData = await MCCFruitPexelsAPI();
      setMemoryData(fetchedMemoryData);
    };
    fetchMemoryData();
  }, []);

  console.log(memoryData);

  return (
    <>
      <h1>Fruit</h1>
      <div>
        <MemoryGame memoryData={memoryData} />
      </div>
    </>
  );
};

export default FuitMC;
