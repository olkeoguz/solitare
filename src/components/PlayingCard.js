import { Grid } from '@material-ui/core';
import React from 'react';
import Single from './Single';
import { makeStyles } from '@material-ui/core';
import { useDrop } from 'react-dnd';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
  },
}));

const PlayingCard = ({ card, addToAnotherColumn, index }) => {
  const classes = useStyles();

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'image',
    drop: (item) => {
      addToAnotherColumn(item.single, item.rowIndex, item.columnIndex, index);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <Grid item style={{ margin: '10px' }}>
      <Grid
        container
        direction='column'
        className={classes.container}
        ref={drop}
      >
        {card.map((single, idx) => (
          <Grid item key={single.id}>
            <Single
              single={single}
              rowIndex={index}
              columnIndex={idx}
              length={card.length}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default PlayingCard;
