import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      cursor: "pointer",
    },
  },
  colors: {
    backgroundColor: "grey",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    color: "black",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: "relative",
  },
  emoji: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem",
  },
};

function miniPalette(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div className={classes.colors}></div>
      <h1 className={classes.title}>
        {props.paletteName} <span className={classes.emoji}>{props.emoji}</span>
      </h1>
    </div>
  );
}
export default withStyles(styles)(miniPalette);
