import React, { useState, useEffect } from "react";
import "./ClothesMC.css";
import MemoryGame from "../../../../components/memory/MemoryGame";
import MCClothesPexelsAPI from "../../../../api/MCClothesPexelsAPI.js";
import AstroLoader from "../../../../components/loading-indicator/AstroLoader.js";

const ClothesMC = () => {
  const [memoryData, setMemoryData] = useState([]);

  useEffect(() => {
    const fetchMemoryData = async () => {
      const fetchedMemoryData = await MCClothesPexelsAPI();
      setMemoryData(fetchedMemoryData);
    };
    fetchMemoryData();
  }, []);

  const loading = memoryData.length === 0;
  return (
    <>
      <h1>Clothes</h1>
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

export default ClothesMC;
