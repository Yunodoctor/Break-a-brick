import { Button, makeStyles } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';

const useStyles = makeStyles({
  gameScreen: {
    backgroundColor: 'black',
    width: 1280,
    height: 720,
    //placeSelf: "center",
  },
});

export default function GameScreen(props) {
  const [paddlePosition, setPaddlePosition] = useState(0);

  const classes = useStyles();

  const windowRef = useRef();
  const paddleRef = useRef();
  console.log(props);
  const mouseMove = (e) => {
    const offset = windowRef.current.clientWidth / 2;
    const whitespace = (window.innerWidth - offset * 2) / 2;
    const paddlePosition = e.clientX - whitespace;

    console.log(windowRef);

    if (paddlePosition <= paddleRef.current.clientWidth / 2) {
      setPaddlePosition(paddleRef.current.clientWidth / 2 - offset);
    } else if (paddlePosition >= windowRef.current.clientWidth - paddleRef.current.clientWidth / 2) {
      setPaddlePosition(windowRef.current.clientWidth - paddleRef.current.clientWidth / 2 - offset);
    } else {
      setPaddlePosition(paddlePosition - offset);
    }
  };

  return (
    <>
      <div ref={windowRef} className={classes.gameScreen} onMouseMove={(e) => mouseMove(e)}></div>
      {props.children[1].type({ mouseX: paddlePosition, paddleRef: paddleRef })}
      {props.children[0].type({ velocity: 0, direction: 0 })}
    </>
  );
}
