import React from 'react';
import heartsback from '../assets/hearts-back.jpg';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  single: {
    borderRadius: 12,
    cursor: 'pointer',
  },
}));

const Single = ({ single }) => {
  const classes = useStyles();

  return single.showFront ? (
    <img src={single.image} alt={single.image} className={classes.single} />
  ) : (
    <img src={heartsback} alt={single.image} className={classes.single} />
  );
};

export default Single;
