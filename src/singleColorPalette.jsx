import React, { useState } from "react";
import ColorBox from "./colorBox.jsx";
import Navbar from "./navbar.js";
import PaletteFooter from "./paletteFooter.jsx";
import { useNavigate } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/singleColorStyles.js";

 function SingleColor(props) {
  const { classes, palette, colorId } = props;
  const [format, setFormat] = useState("hex");
  const navigate = useNavigate();

  const handleShade = (palette, colorId) => {
    let shades = [];
    let allColors = palette.colors;
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorId)
      );
    }
    return shades.slice(1);
  };
  const handleColorFormat = (value) => {
    setFormat(() => value);
  };
  return (
    <div className={classes.Palette}>
      <Navbar handleColorFormat={handleColorFormat} isSingleColor={true} />
      <div className={classes.PaletteColor}>
        {handleShade(palette, colorId).map((color) => (
          <ColorBox
            backgroundcolor={color[format]}
            name={color.name}
            key={color.name}
            id={color.id}
            showfullColor={false}
            paletteId={palette.id}
            // height={"50%"}
          />
        ))}
        <div className={classes.goBack}>
          <button className={classes.backButton} onClick={() => navigate(-1)}>Go Back</button>
        </div>
      </div>
      <PaletteFooter palette={palette} />
    </div>
  );
}
export default withStyles(styles) (SingleColor);
