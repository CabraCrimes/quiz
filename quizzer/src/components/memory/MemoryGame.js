import React, { useEffect, useState } from "react";
import "./MemoryGame.css";


const MemoryGame = ({memoryData}) => {
  const [flipCard, setFlipCard] = useState([]);
  const [doubleCardData, setDoubleCardData] = useState([])
  const [shuffledData, setShuffledData] = useState([]);

  useEffect(() => {
    const handleCardData = (data) =>{
      const doubleData = [...data, ...data]
      return doubleData
    };
    const handledDoubledData = handleCardData(memoryData);

    // Function to shuffle the array
    const shuffleArray = (array) => {
      const shuffledArray = [...array];
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
      }
      return shuffledArray;
    };

    // Shuffle the memory data array
    const shuffledMemoryData = shuffleArray(handledDoubledData);
    setShuffledData(shuffledMemoryData);
  },[memoryData])
  
  console.log(shuffledData)

  const handleCardClick = (e) => {
    // console.log(e.currentTarget.getAttribute("index"));
    const index = parseInt(e.currentTarget.getAttribute("index"));
    setFlipCard((prevFlippedCards) =>
      prevFlippedCards.includes(index) ? 
      prevFlippedCards.filter((item) => item !== index)
        : [...prevFlippedCards, index]
    );
    // So, in your example, if prevFlippedCards is [1, 2, 5] and index is 1, here's what happens:

    // For item = 1 (the first item in prevFlippedCards):

    // 1 !== 1 evaluates to false, so 1 is removed from the array.
    // For item = 2 (the second item in prevFlippedCards):

    // 2 !== 1 evaluates to true, so 2 is kept in the array.
    // For item = 5 (the third item in prevFlippedCards):

    // 5 !== 1 evaluates to true, so 5 is kept in the array.
    
    // After filtering, the resulting array is [2, 5].
  };
  
  return (
    <>
      <div>
        <h1>Memory</h1>
        
        <div className="row">
          {shuffledData.map((cardMappedData, index) => (
            <div className="column" key={index}>
              <div
                index={index}
                // className={`card${flipCard.includes(index) ? "flipped" : ""}`}
                className="card-body"
                onClick={handleCardClick}
              >
                {!flipCard.includes(index) && (
                  <div className="card-front">
                    <p>Card Number {index + 1}</p>
                  </div>
                )}
                {flipCard.includes(index) && (
                  <div className="card-back">
                    <img src={cardMappedData.src.medium} alt="Quizzer" />
                    {/* <p>{mappedData.name}</p>
                    <p>{mappedData.description}</p> */}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MemoryGame;
