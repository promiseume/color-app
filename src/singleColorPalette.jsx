import React, { useState } from "react";
import "./colorBox.css";
import ColorBox from "./colorBox.jsx";
import Navbar from "./navbar.js";
import PaletteFooter from "./paletteFooter.jsx";
import { useNavigate } from "react-router-dom";

export default function SingleColor({ palette, colorId }) {
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
    <div className="SinglePalette Palette">
      <Navbar handleColorFormat={handleColorFormat} isSingleColor={true} />
      <div className="Palette-color">
        {handleShade(palette, colorId).map((color) => (
          <ColorBox
            backgroundcolor={color[format]}
            name={color.name}
            key={color.name}
            id={color.id}
            showLink={false}
            paletteId={palette.id}
          />
        ))}
        <div className="go-back ColorBox">
          <button className="back-button" onClick={() => navigate(-1)}>Go Back</button>
        </div>
      </div>
      <PaletteFooter palette={palette} />
    </div>
  );
}
