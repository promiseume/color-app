import React from "react";
import { Routes, Route } from "react-router-dom";
import PaletteWrapper from "./paletteWrapper.jsx";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<h1>hii</h1>}></Route>
        <Route path="/palette/:id" element={<PaletteWrapper/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
