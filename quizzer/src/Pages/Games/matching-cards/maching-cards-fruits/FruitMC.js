import React, { useState, useEffect } from "react";
import "./FruitMC.css";
import MemoryGame from "../../../../components/memory/MemoryGame";
import MCCFruitPexelsAPI from "../../../../api/MCFruitPexelsAPI";
import AstroLoader from "../../../../components/loading-indicator/AstroLoader";

const FuitMC = () => {
  const [memoryData, setMemoryData] = useState([]);

  useEffect(() => {
    const fetchMemoryData = async () => {
      const fetchedMemoryData = await MCCFruitPexelsAPI();
      setMemoryData(fetchedMemoryData);
    };
    fetchMemoryData();
  }, []);

  const loading = memoryData.length === 0;

  return (
    <>
      <h1>Fruit</h1>
      {loading ? (
        <AstroLoader />
      ) : (
        <div>
          <MemoryGame memoryData={memoryData} />
        </div>
      )}
    </>
  );
};

export default FuitMC;
