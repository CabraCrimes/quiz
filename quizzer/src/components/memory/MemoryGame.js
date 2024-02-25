import React, { useState } from "react";
import "./MemoryGame.css";

const data = [
  {
    name: "Cow",
    image: "IMAGE OF COW",
    description: "A farm animal that produces milk",
  },
  {
    name: "Pig",
    image: "IMAGE OF PIG",
    description: "A farm animal that is used to make bacon",
  },
  {
    name: "Chicken",
    image: "IMAGE OF Chicken",
    description: "A farm animal that produces eggs",
  },
  {
    name: "Donkey",
    image: "IMAGE OF DONKEY",
    description: "A farm animal that is used for farm work",
  },
  {
    name: "Cow2",
    image: "IMAGE OF COW2",
    description: "A farm animal that produces milk2",
  },
  {
    name: "Pig2",
    image: "IMAGE OF PIG2",
    description: "A farm animal that is used to make bacon2",
  },
  {
    name: "Chicken2",
    image: "IMAGE OF Chicken2",
    description: "A farm animal that produces eggs2",
  },
  {
    name: "Donkey2",
    image: "IMAGE OF DONKEY2",
    description: "A farm animal that is used for farm work2",
  },
  {
    name: "Cow3",
    image: "IMAGE OF COW3",
    description: "A farm animal that produces milk3",
  },
  {
    name: "Pig3",
    image: "IMAGE OF PIG3",
    description: "A farm animal that is used to make bacon3",
  },
  {
    name: "Chicken3",
    image: "IMAGE OF Chicken3",
    description: "A farm animal that produces eggs3",
  },
  {
    name: "Donkey3",
    image: "IMAGE OF DONKEY3",
    description: "A farm animal that is used for farm work3",
  },
  {
    name: "Cow4",
    image: "IMAGE OF COW4",
    description: "A farm animal that produces milk4",
  },
  {
    name: "Pig4",
    image: "IMAGE OF PIG4",
    description: "A farm animal that is used to make bacon4",
  },
  {
    name: "Chicken4",
    image: "IMAGE OF Chicken4",
    description: "A farm animal that produces eggs4",
  },
  {
    name: "Donkey4",
    image: "IMAGE OF DONKEY4",
    description: "A farm animal that is used for farm work4",
  },
];

const MemoryGame = ({memoryData}) => {
  const [flipCard, setFlipCard] = useState([]);
console.log(memoryData)
  const handleCardData = () => {
    const doubleCards = [];
    doubleCards.push(memoryData)
    return doubleCards;
  };
  const test = handleCardData();
console.log(test)

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
  // console.log(memoryData.map(e => e.src.medium))
  return (
    <>
      <div>
        <h1>Memory</h1>
        
        <div className="row">
          {data.map((mappedData, index) => (
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
                    <img src={memoryData} alt="Quizzer" />
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
