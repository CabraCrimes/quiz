import React, { useState, useEffect } from "react";
import MemoryGame from "../../../../components/memory/MemoryGame.js";
import MCAnimalPexelsAPI from "../../../../api/MCAnimalsPexelsAPI.js";
import AstroLoader from "../../../../components/loading-indicator/AstroLoader.js";
import "./AnimalMC.css";

const AnimalMC = () => {
  const [memoryData, setMemoryData] = useState([]);

  useEffect(() => {
    const fetchMemoryData = async () => {
      const fetchedMemoryData = await MCAnimalPexelsAPI();
      setMemoryData(fetchedMemoryData);
    };
    fetchMemoryData();
  }, []);

  const loading = memoryData.length === 0;
  console.log(loading);
  return (
    <>
      <h1>Animals</h1>
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

export default AnimalMC;
