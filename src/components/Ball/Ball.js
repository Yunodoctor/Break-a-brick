import { makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles({
  gameScreen: {
    height: 10,
    width: 10,
    background: "red",
    borderRadius: "50%",
    position: "absolute",
  },
});

export default function Ball({ positionX, positionY }) {
  const classes = useStyles();
  return <div className={classes.gameScreen} style={{ transform: `translate(${positionX}px, ${positionY}px)` }}></div>;
}
