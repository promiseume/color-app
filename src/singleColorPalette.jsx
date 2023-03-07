import React, { useState } from "react";
import ColorBox from "./colorBox.jsx";

export default function SingleColor({ palette, colorId }) {
  const [format, setFormat] = useState("hex");

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
  return (
    <div>
      {handleShade(palette, colorId).map((color) => (
        <ColorBox
          backgroundcolor={color[format]}
          name={color.name}
          key={color.name}
          id={color.id}
          showLink={false}
          // paletteId={palette.id}
        />
      ))}
    </div>
  );
}
