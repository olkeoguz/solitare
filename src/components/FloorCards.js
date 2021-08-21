import React, { useContext, useState } from 'react';
import spadesBack from '../assets/spades-back.png';
import { GameContext } from '../context/GameContext';
import { useStyles } from './styles/styles.FloorCards';

const FloorCards = () => {
  const classes = useStyles();

  const { cards, floorCards, setCards, setFloorCards, checkForCompletedDecs, emptySuitExists, setCommonError } = useContext(GameContext);
  const [remainingCardClaim, setRemainingCardClaim] = useState(5);

  const dealTheCards = () => {
    if (!emptySuitExists()) {
      const prevCards = floorCards;
      //Get last 10 item of the floor cards
      const splicedCards = prevCards.splice(-10);
      setFloorCards(prevCards);
      //Reduce 1 card dealing claim
      setRemainingCardClaim(remainingCardClaim - 1);
      //Dealing cards to playing card chunks
      dealFloorCards(splicedCards);
      //Check for if there is any completed suits
      checkForCompletedDecs()
    }
    else {
      const error = { show: true, message: "You can not deal cards when a chunk empty!" }
      setCommonError(error);
    }
    
  };

  const dealFloorCards = (dealingCards) => {
    const prevCards = cards;
    for (let i = 0; i < 10; i++) {
      dealingCards[i].showFront = true;
      prevCards[i].push(dealingCards[i]);
    }
    setCards(() => [...prevCards]);
  };
  return (
    <>
      {[...Array(remainingCardClaim)].map((item, index) => (
        <img
          key={index}
          className={classes.imageBox}
          src={spadesBack}
          alt='closedCard'
          onClick={() => dealTheCards()}
        />
      ))}
    </>
  );
};

export default FloorCards;
