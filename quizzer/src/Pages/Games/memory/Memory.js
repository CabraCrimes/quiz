import React, { useState } from "react";
import "./Memory.css";
import Cthulhu from "../../../assests/Cthulhu.jpg";
import PexelsAPI from "../../../api/PexelsAPI";

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

// this all needs to be a comonent
const Memory = () => {
  const [flipCard, setFlipCard] = useState([]);

  const handleCardClick = (e) => {
    // console.log(e.currentTarget.getAttribute("index"));
    const index = parseInt(e.currentTarget.getAttribute("index"));
    setFlipCard((prevFlippedCards) =>
      prevFlippedCards.includes(index)
        ? prevFlippedCards.filter((item) => item !== index)
        : [...prevFlippedCards, index]
    );
  };
  return (
    <>
      <div>
        <h1>Memory</h1>
        
        <div className="row">
          {/* THIS NEED TO BE A COMPONENT */}
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
                    <img src={Cthulhu} alt="Quizzer" />
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

export default Memory;
