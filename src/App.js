import React from "react";
import { Routes, Route } from "react-router-dom";
import PaletteWrapper from "./paletteWrapper.jsx";
import { seedColor } from "./seedColor.js";
import PaletteList from "./PaletteList.jsx";
import NewPalette from "./newPalette";
import SingleWrapper from "./singleWrapper.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={<PaletteList palettes={seedColor} />}
        ></Route>
        <Route path="/palette/:id" element={<PaletteWrapper />}></Route>
        <Route path='palette/new' element={<NewPalette/>}></Route>
        <Route
          path="/palette/:id/:colorId"
          element={<SingleWrapper />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
