import React, { useEffect, useState } from "react";
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
    //look below for issues
    console.log("Clicked index:", index);
    console.log("Clicked id:", id);

    // If the clicked card is already flipped or matched, return
    console.log(flipCard.includes(index));
    console.log("Flip Card", flipCard);
    console.log("Matched", matchedCards);
    console.log("flipCard.length", flipCard.length);
    console.log("matched.length", matchedCards.length);
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

        {reloadButton && (
          <button type="button" onClick={reload} className="restartButton">
          <span className="button__text">Restart</span>
          <span className="button__icon">
            <svg
              className="svg"
              height="48"
              viewBox="0 0 48 48"
              width="48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M35.3 12.7c-2.89-2.9-6.88-4.7-11.3-4.7-8.84 0-15.98 7.16-15.98 16s7.14 16 15.98 16c7.45 0 13.69-5.1 15.46-12h-4.16c-1.65 4.66-6.07 8-11.3 8-6.63 0-12-5.37-12-12s5.37-12 12-12c3.31 0 6.28 1.38 8.45 3.55l-6.45 6.45h14v-14l-4.7 4.7z"></path>
              <path d="M0 0h48v48h-48z" fill="none"></path>
            </svg>
          </span>
        </button>
        )}
        
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
