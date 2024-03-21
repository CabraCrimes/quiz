import React, { useState, useEffect } from "react";
import MemoryGame from "../../../../components/memory/MemoryGame.js";
import MCAnimalsTwoPexelsAPI from "../../../../api/MCAnimalsTwoPexelsAPI.js";
import AstroLoader from "../../../../components/loading-indicator/AstroLoader.js";
import "./AnimalTwoMC.css";

const AnimalTwoMC = () => {
  const [memoryData, setMemoryData] = useState([]);

  useEffect(() => {
    const fetchMemoryData = async () => {
      const fetchedMemoryData = await MCAnimalsTwoPexelsAPI();
      setMemoryData(fetchedMemoryData);
    };
    fetchMemoryData();
  }, []);

  console.log(memoryData)

  const loading = memoryData.length === 0;
  console.log(loading);
  return (
    <>
      <h1>Animals 2</h1>
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

export default AnimalTwoMC;
