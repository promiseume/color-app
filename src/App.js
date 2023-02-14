import Palette from './Palette.jsx'
import {seedColor} from './seedColor.js'
import {ChangeColorChange} from './colorConverter.js'
function App() {
  console.log(ChangeColorChange(seedColor[3]));
  return (
    <div className="App">
      <Palette palette={seedColor[3]}/>
      </div>
  );
}

export default App;
