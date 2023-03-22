import React,{useState} from "react";
import { Routes, Route } from "react-router-dom";
import PaletteWrapper from "./paletteWrapper.jsx";
import { seedColor } from "./seedColor.js";
import PaletteList from "./PaletteList.jsx";
import NewPalette from "./newPalette";
import SingleWrapper from "./singleWrapper.jsx";

function App() {
  const [palettes, setPalettes] = useState(seedColor);
  const savePalette = (newPalette) => {
    setPalettes([...palettes, newPalette]);
  };
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={<PaletteList palettes={palettes} />}
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
