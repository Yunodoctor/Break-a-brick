import { Button, makeStyles } from "@material-ui/core";
import { GamepadRounded } from "@material-ui/icons";
import React, { useEffect, useRef, useState } from "react";

const useStyles = makeStyles({
  gameScreen: {
    backgroundColor: "black",
    width: 1280,
    height: 720,
    //placeSelf: "center",
  },
});

let i = 1;

export default function GameScreen(props) {
  const [paddlePosition, setPaddlePosition] = useState(0);
  const [gameStart, setGameStart] = useState(false);

  const [ballProperties, setBallProperties] = useState({});

  const classes = useStyles();

  const windowRef = useRef();
  const paddleRef = useRef();
  let mainLoop;

  const mouseMove = (e) => {
    const offset = windowRef.current.clientWidth / 2;
    const whitespace = (window.innerWidth - offset * 2) / 2;
    const paddlePosition = e.clientX - whitespace;

    if (paddlePosition <= paddleRef.current.clientWidth / 2) {
      setPaddlePosition(paddleRef.current.clientWidth / 2 - offset);
    } else if (paddlePosition >= windowRef.current.clientWidth - paddleRef.current.clientWidth / 2) {
      setPaddlePosition(windowRef.current.clientWidth - paddleRef.current.clientWidth / 2 - offset);
    } else {
      setPaddlePosition(paddlePosition - offset);
    }

    if (gameStart === false) {
    }
  };

  const gameLoop = () => {
    setBallProperties({ positionX: 0, positionY: i });
    i = i + 5;
  };

  const pauseGame = () => {
    clearInterval(mainLoop);
    setGameStart(false);
  };

  const startGame = () => {
    setGameStart(true);
  };

  useEffect(() => {
    //if (gameStart) {
    mainLoop = setInterval(gameLoop, 33);
    //}
  }, []);

  return (
    <>
      <div ref={windowRef} className={classes.gameScreen} onMouseMove={(e) => mouseMove(e)}></div>
      {props.children[1].type({ mouseX: paddlePosition, paddleRef: paddleRef })}
      {
        //ball
        props.children[0].type({ positionX: ballProperties.positionX, positionY: ballProperties.positionY })
      }
      {gameStart ? (
        <Button onClick={() => pauseGame()}>Pause</Button>
      ) : (
        <Button onClick={() => startGame()}>Start</Button>
      )}
    </>
  );
}
