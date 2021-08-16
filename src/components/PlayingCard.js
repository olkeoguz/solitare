import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import Single from './Single';
import { makeStyles } from '@material-ui/core';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
  },
}));

const PlayingCard = ({ card }) => {
  const [cards, setCards] = useState(card);
  const classes = useStyles();

  const handleOnDragEnd = (result) => {
    console.log(result);
    if (!result.destination) return;
    const items = Array.from(cards);
    // if(result.source.index !== items.length - 1) return;
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setCards(items);
  };

  return (
    <Grid item style={{ margin: '10px' }}>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='cards'>
          {(provided) => (
            <Grid
              container
              direction='column'
              className={classes.container}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {cards.map((single, index) => (
                <Draggable
                  key={single.id}
                  draggableId={single.id}
                  index={index}
                >
                  {(provided) => (
                    <Grid
                      item
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                    >
                      <Single single={single} />
                    </Grid>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Grid>
          )}
        </Droppable>
      </DragDropContext>
    </Grid>
  );
};

export default PlayingCard;

/* <Grid item style={{ margin: '10px' }}>
      <Grid container direction='column' className={classes.container}>
        {card.map((single) => (
          <Grid
            item
            key={single.id}
          >
            <Single single={single} />
          </Grid>
        ))}
      </Grid>
    </Grid> */
