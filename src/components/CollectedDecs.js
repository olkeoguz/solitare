import React, { useContext } from 'react';
import spadesKing from '../assets/spades-king.png';
import { GameContext } from '../context/GameContext';
import PlaceHolder from './PlaceHolder';
import { useStyles } from './styles/styles.CollectedDesc';

const CollectedDecs = () => {
  const { collectedDecsCount } = useContext(GameContext);
  const classes = useStyles();

  return (
    <>
      {[...Array(8)].map((item, index) =>
        index < collectedDecsCount ? (
          <img
            className={classes.image}
            src={spadesKing}
            alt='closedCard'
            key={index}
          />
        ) : (
          <PlaceHolder key={index} />
        )
      )}
    </>
  );
};

export default CollectedDecs;
