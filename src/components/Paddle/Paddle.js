import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  paddle: {
    backgroundColor: "red",
    width: 300,
    height: 30,
    position: "relative",
    pointerEvents: "none",
    top: -30,
  },
});

export default function Paddle({ mouseX, paddleRef }) {
  const classes = useStyles();

  return (
    <div
      ref={paddleRef}
      className={classes.paddle}
      style={{ transform: `translateX(${mouseX}px)` }}
    ></div>
  );
}
