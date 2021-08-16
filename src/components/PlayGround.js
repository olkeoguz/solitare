import { Container, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import PlayingCard from './PlayingCard';
import { initializeCards } from '../game/useLogic';
import { v4 as uuidv4 } from 'uuid';

const PlayGround = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const { playingCards, floorCards } = initializeCards();
    setCards(playingCards);
  }, []);

  return (
    <Container style={{ marginTop: '100px' }}>
      <Grid container>
        {cards.map((card) => (
          <PlayingCard key={uuidv4()} card={card} />
        ))}
      </Grid>
    </Container>
  );
};

export default PlayGround;
