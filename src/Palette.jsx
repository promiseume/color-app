import React, { useState } from "react";
import ColorBox from "./colorBox.jsx";
import Navbar from "./navbar.js";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/paletteStyles.js";


 function Palette(props) {
  const { classes } = props;
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");
  const handleLevelChange = (level) => {
    setLevel(() => level);
  };
  const handleColorFormat = (value) => {
    setFormat(() => value);
  };
  return (
    <div className={classes.Palette}>
      <Navbar
        level={level}
        handleLevelChange={handleLevelChange}
        handleColorFormat={handleColorFormat}
        isSingleColor={false}
      />
      <div className={classes.PaletteColor}>
        {props.palette.colors[level].map((color) => (
          <ColorBox
            backgroundcolor={color[format]}
            name={color.name}
            key={color.id}
            id={color.id}
            paletteId={props.palette.id}
            showfullColor={true}
            height={"25%"}
          />
        ))}
      </div>
      <footer className={classes.PaletteFooter}>
        {props.palette.paletteName}
        <span className="emoji">{props.palette.emoji}</span>
      </footer>
    </div>
  );
}
export default withStyles(styles) (Palette);