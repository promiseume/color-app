import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/miniPaletteStyles";


function miniPalette(props) {
  const { classes } = props;

  return (
    <div className={classes.root} onClick={props.handlePaletteClick}>
      <div className={classes.colors}>
        {props.colors.map((color) => (
          <div
            className={classes.miniColor}
            style={{ backgroundColor: color.color }}
            key={color.name}
          />
        ))}
      </div>
      <h1 className={classes.title}>
        {props.paletteName} <span className={classes.emoji}>{props.emoji}</span>
      </h1>
    </div>
  );
}
export default withStyles(styles)(miniPalette);
