import Palette from './Palette.jsx'
import {seedColor} from './seedColor.js'
function App() {
  return (
    <div className="App">
      <Palette palette={seedColor[3]}/>
      </div>
  );
}

export default App;
