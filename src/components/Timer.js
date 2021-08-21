import { Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      //Update timer state every second
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (secs) => {
    //Format time as m:s
    let hours = Math.floor(secs / 3600);
    let minutes = Math.floor(secs / 60) % 60;
    let seconds = secs % 60;
    return [hours, minutes, seconds]
      .map((v) => ('' + v).padStart(2, '0'))
      .filter((v, i) => v !== '00' || i > 0)
      .join(':');
  };
  return (
    <Typography variant='h5' display='inline'>
      Time:
      <Typography display='inline' variant='body1' style={{fontWeight: 'bold',fontSize:24}} color='secondary'>
        {' '}
        {formatTime(seconds)}
        {'  '}
      </Typography>
    </Typography>
  );
};

export default Timer;
