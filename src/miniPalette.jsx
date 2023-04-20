import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/miniPaletteStyles";
import DeleteIcon from "@material-ui/icons/Delete";

function miniPalette(props) {
  const { classes } = props;
  const deletePalette = (e) => {
    e.stopPropagation();
    props.deletePalette(props.id);
  };

  return (
    <div className={classes.root} onClick={props.handlePaletteClick}>
      <div className={classes.delete}>
        <DeleteIcon
          className={classes.deleteIcon}
          style={{ transition: "all 0.3s ease-in-out" }}
          onClick={deletePalette}
        />
      </div>
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
