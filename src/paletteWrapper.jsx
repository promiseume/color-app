import React from "react";
import { useParams } from "react-router-dom";
import { seedColor } from "./seedColor.js";
import Palette from "./Palette.jsx";
import { ChangeColorChange } from "./colorConverter.js";

export default function PaletteWrapper() {
  const findPalette = (id) => seedColor.find((palette) => palette.id === id);

  const { id } = useParams();
  const palette = ChangeColorChange(findPalette(id));
  return <Palette palette={palette} />;
}
