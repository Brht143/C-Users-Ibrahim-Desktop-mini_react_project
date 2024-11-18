import React from "react";
import { useState } from "react";
import "../App.css";
import pokemonsCards from "../data/cards";
import cover from "../images/cover.jpg"


const Cards = ({ score, setScore }) => {
    
    const [previousRef, setPreviousRef] = useState();
    const [previousIndex, setPreviousIndex] = useState();

    const showCards = (currentCard, previousCard) => {
        previousCard.className = currentCard.className = "card flip"
        if (currentCard.ref === previousCard.ref) setScore(score+1)
    }
    
    const hideCards = (currentCard, previousCard) => {
        if (currentCard.ref !== previousCard.ref) currentCard.className = previousCard.className = "card"
        console.log((currentCard.ref !== previousCard.ref))
        console.log(currentCard.className)
    }
    
    const handleCompare = (currentCard) => {

    if (currentCard.className === "card flip") return true;
    
    if (previousRef) {
        let previousCard = pokemonsCards[previousIndex];
        if (currentCard.index ===  previousCard.index) return true;
        showCards(previousCard, currentCard)
        setTimeout(() => {hideCards(previousCard, currentCard)}, 1500)
        setPreviousRef();
        setPreviousIndex();
    } 
    else
    {
      setPreviousRef(currentCard.ref);
      setPreviousIndex(currentCard.index);
    }
  };

  return pokemonsCards.map((card) => (
    <div key={card.index} className={card.className} onClick={() => handleCompare(card)}>
      <img className = "show" src={card.image}></img>
      <img className = "hide" src={cover}></img>
    </div>
  ));
};

export default Cards;
