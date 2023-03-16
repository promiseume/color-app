import React from 'react'
import { withStyles } from "@material-ui/styles";
import styles from "./styles/paletteStyles.js";

function PaletteFooter(props) {
  const { palette, classes } = props;

  return (
        <footer className={classes.PaletteFooter}>
        {palette.paletteName}
        <span className={classes.emoji}>{palette.emoji}</span>
      </footer>
  )
}
export default withStyles(styles)(PaletteFooter);