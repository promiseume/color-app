import React, { useState } from "react";
import ColorBox from "./colorBox.jsx";
import "./palette.css";
import Navbar from "./navbar.js";

export default function Palette({ palette }) {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");
  const handleLevelChange = (level) => {
    setLevel(() => level);
  };
  const handleColorFormat = (value) => {
    setFormat(() => value);
  };
  return (
    <div className="Palette">
      <Navbar
        level={level}
        handleLevelChange={handleLevelChange}
        handleColorFormat={handleColorFormat}
        isSingleColor={false}
      />
      <div className="Palette-color">
        {palette.colors[level].map((color) => (
          <ColorBox
            backgroundcolor={color[format]}
            name={color.name}
            key={color.id}
            id={color.id}
            paletteId={palette.id}
            showfullColor={true}
            height={"25%"}
          />
        ))}
      </div>
      <footer className="Palette-footer">
        {palette.paletteName}
        <span className="emoji">{palette.emoji}</span>
      </footer>
    </div>
  );
}
