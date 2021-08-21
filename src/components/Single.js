import React from 'react';
import spadesBack from '../assets/spades-back.png';
import { useDrag } from 'react-dnd';
import { useStyles } from './styles/styles.Single';

const Single = ({ card, click, chunkIndex, cardIndex, isDraggable }) => {
  const classes = useStyles(cardIndex);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'image',
    item: { card, chunkIndex, cardIndex },
    canDrag: () => isDraggable(),
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return card.showFront ? (
    <img
      ref={drag}
      src={card.image}
      alt={card.image}
      className={classes.showFront}
      onClick={click}
      style={{ border: isDragging ? '3px solid pink' : '0px' }}
    />
  ) : (
    <img
      src={spadesBack}
      alt={card.image}
      className={classes.card}
      onClick={click}
    />
  );
};

export default Single;
