import React, { useEffect, useState } from "react";
import RestartButton from "../restart-button/RestartButton.js";
import "./MemoryGame.css";

const MemoryGame = ({ memoryData }) => {
  const [flipCard, setFlipCard] = useState([]);
  const [shuffledData, setShuffledData] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [restart, setRestart] = useState(false);
  const reloadButton = matchedCards.length === 8;

  useEffect(() => {
    // Function to double the card data
    const handleCardData = (data) => {
      return [...data, ...data];
    };
    const handledDoubledData = handleCardData(memoryData);

    // Function to shuffle the array
    const shuffleArray = (array) => {
      const shuffledArray = [...array];
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [
          shuffledArray[j],
          shuffledArray[i],
        ];
      }
      return shuffledArray;
    };

    // Shuffle the memory data array
    const shuffledMemoryData = shuffleArray(handledDoubledData);
    setShuffledData(shuffledMemoryData);
  }, [memoryData, restart]);

  const handleCardClick = (e) => {
    // console.log(e.currentTarget.getAttribute("index"));
    const index = parseInt(e.currentTarget.getAttribute("index"));
    const id = parseInt(e.currentTarget.getAttribute("id"));

    // If the clicked card is already flipped or matched, return
    if (
      flipCard.includes(index) ||
      matchedCards.includes(id) ||
      flipCard.length > 2
    ) {
      return;
    }

    // Update the flipped cards state with the index and id of the clicked card
    setFlipCard((prevFlippedCards) => [...prevFlippedCards, index, id]);

    // If there are two flipped cards, check if they match
    if (flipCard.length === 2) {
      const firstCardIndex = flipCard[0];
      const firstCardId = shuffledData[firstCardIndex].id;
      // If the ids match, add them to the matched cards
      if (firstCardId === id) {
        setMatchedCards((prevMatchedCards) => [...prevMatchedCards, id]);
        // Clear flipped cards after a short delay
        setTimeout(() => {
          setFlipCard([]);
        }, 1500); // Adjust the time as needed
      } else {
        // Clear flipped cards after a short delay
        setTimeout(() => {
          setFlipCard([]);
        }, 1000); // Adjust the time as needed
      }
    }
  };

  const reload = () => {
    setRestart(!restart);
    setMatchedCards([]);
  };

  return (
    <>
      <div>
        <h1>Memory</h1>
        
        {reloadButton && <RestartButton onClick={reload}/>}
        
        <div className="row">
          {shuffledData.map((cardMappedData, index) => (
            <div className="column" key={index}>
              <div
                id={cardMappedData.id}
                index={index}
                className={`card-body${
                  flipCard.includes(index) ||
                  matchedCards.includes(cardMappedData.id)
                    ? " flipped"
                    : ""
                }`}
                // className="card-body"
                onClick={handleCardClick}
              >
                {!flipCard.includes(index) &&
                  !matchedCards.includes(cardMappedData.id) && (
                    <div className="card-front">
                      <p>Card Number {index + 1}</p>
                    </div>
                  )}
                {(flipCard.includes(index) ||
                  matchedCards.includes(cardMappedData.id)) && (
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
