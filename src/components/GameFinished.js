import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button, Typography } from '@material-ui/core';
import { useStyles } from './styles/styles.GameFinished';

export default function GameFinished() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Typography variant='h3' gutterBottom id='transition-modal-title'>
              Congratulations!
            </Typography>
            <Typography
              align='center'
              gutterBottom
              id='transition-modal-description'
            >
              You finished the game successfully!
            </Typography>
            <Typography
              align='center'
              gutterBottom
              id='transition-modal-description'
            >
              Would you like to start a new game ?
            </Typography>
            <Button variant='contained' color='secondary' onClick={handleClose}>
              New Game
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
