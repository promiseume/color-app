import React from "react";
import { useParams } from "react-router-dom";
import SingleColorPalette from "./singleColorPalette.jsx";
import { ChangeColorChange } from "./colorConverter.js";

export default function SinglePaletteWrapper({palettes}) {
  const findPalette = (id) => palettes.find((palette) => palette.id === id);

  const {id,colorId } = useParams();
  const palette = ChangeColorChange(findPalette(id));
  return <SingleColorPalette palette={palette} colorId={colorId} />;
}
