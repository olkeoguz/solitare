import { Container, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import PlayingCard from './PlayingCard';
import { initializeCards } from '../game/useLogic';
import Single from './Single';
import heartsBack from '../assets/hearts-back.jpg';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  newDeck: {
    cursor:"pointer",
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      transform: 'scaleY(1.05)',
    },
  },
}));

const PlayGround = () => {
  const [cards, setCards] = useState([]);
  const [floorCards, setFloorCards] = useState([]);
  const [remainingCardClaim, setRemainingCardClaim] = useState(5);

  const classes = useStyles();

  const addCardToBoard = (card, row, column, targetIndex) => {
    // console.log(card,row,column,targetIndex);
    const updatedCards = [...cards];
    updatedCards[targetIndex].push(card);
    // Delete the dragged element from its original position.
    updatedCards[row].splice(column, 1);
    // Make the previous element's showFront true
    if (updatedCards[row][updatedCards[row].length - 1]) {
      updatedCards[row][updatedCards[row].length - 1].showFront = true;
    }
    setCards(updatedCards);
  };

  useEffect(() => {
    const { playingCards, floorCards } = initializeCards();
    setCards(playingCards);
    setFloorCards(floorCards);
  }, []);

  const dealFloorCards = () => {
    const prevCards = cards;
    for (let i = 0; i < 10; i++) {
      const card = floorCards.shift();
      card.showFront = true;
      prevCards[i].push(card);
    }
    setCards(() => [...cards]);
  };
  return (
    <Container style={{ marginTop: '120px' }}>
      <Grid className={classes.newDeck}>
        {[...Array(remainingCardClaim)].map((item, index) => (
          <Single
            key={index}
            single={{ showFront: false, image: heartsBack }}
            click={() => dealFloorCards()}
          />
        ))}
      </Grid>
      <Grid container style={{ marginTop: '100px' }}>
        {cards.map((card, index) => (
          <PlayingCard
            key={index}
            index={index}
            card={card}
            addToAnotherColumn={addCardToBoard}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default PlayGround;
