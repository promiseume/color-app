import React,{useState,useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import PaletteWrapper from "./paletteWrapper.jsx";
import { seedColor } from "./seedColor.js";
import PaletteList from "./PaletteList.jsx";
import NewPalette from "./newPalette";
import SingleWrapper from "./singleWrapper.jsx";

function App() {
  const [palettes, setPalettes] = useState(seedColor);
  const savedPalettes = JSON.parse(localStorage.getItem("palettes"));
  useEffect(() => {
    localStorage.setItem("palettes", JSON.stringify(palettes));
  }, [palettes]);

  useEffect(() => {
    if (savedPalettes) {
      setPalettes(savedPalettes);
    }
  }, []);
  const savePalette = (newPalette) => {
    setPalettes([...palettes, newPalette]);
  };
  const deletePalette = (id) => {
    setPalettes(palettes.filter((palette) => palette.id !== id));
    
  };
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={<PaletteList palettes={palettes} deletePalette={deletePalette}/>}
        ></Route>
        <Route path="/palette/:id" element={<PaletteWrapper palettes={palettes}/>}></Route>
        <Route path='palette/new' element={<NewPalette savePalette={savePalette} palettes={palettes}/>}></Route>
        <Route
          path="/palette/:id/:colorId"
          element={<SingleWrapper palettes={palettes}/>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
