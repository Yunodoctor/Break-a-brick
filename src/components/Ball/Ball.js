import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

const useStyles = makeStyles({
  gameScreen: {
    height: 10,
    width: 10,
    background: 'red',
    borderRadius: '50%',
    position: 'relative',
    top: '50%',
  },
});

export default function Ball({ position }) {
  const classes = useStyles();

  return <div className={classes.gameScreen}></div>;
}
