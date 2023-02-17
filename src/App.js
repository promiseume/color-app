import Palette from './Palette.jsx'
import {seedColor} from './seedColor.js'
import {ChangeColorChange} from './colorConverter.js';
import {Routes, Route} from "react-router-dom";
function App() {
  console.log(ChangeColorChange(seedColor[3]));
  return (
    <div className="App">
      <Routes>
      <Route exact path='/'element={<Palette palette={ChangeColorChange(seedColor[3])}/>}></Route>
      {/* <Route exact path='/palette/:id'></Route> */}
      </Routes>
      {/* <Palette palette={ChangeColorChange(seedColor[3])}/> */}
      </div>
  );
}

export default App;
