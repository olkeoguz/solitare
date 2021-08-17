import React, { useEffect, useRef, useState } from 'react';
import heartsback from '../assets/hearts-back.jpg';
import { makeStyles } from '@material-ui/core';
import { useDrag } from 'react-dnd';

const useStyles = makeStyles((theme) => ({
  single: {
    borderRadius: 12,
    marginTop: -100,
  },
  showFront: {
    borderRadius: 12,
    cursor: 'pointer',
    transition: 'transform 0.2s ease-in-out',
    marginTop: -100,
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
}));

const Single = ({ single, click, rowIndex, columnIndex, length }) => {
  const classes = useStyles();

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'image',
    item: { single, rowIndex, columnIndex },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return single.showFront ? (
    <img
      ref={drag}
      src={single.image}
      alt={single.image}
      className={classes.showFront}
      onClick={click}
      style={{ border: isDragging ? '3px solid red' : '0px' }}
    />
  ) : (
    <img
      src={heartsback}
      alt={single.image}
      className={classes.single}
      onClick={click}
    />
  );
};

export default Single;
