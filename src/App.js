import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './component-pages/Home';
import Schemes from './component-pages/Schemes';
import { useState } from 'react';

function App() {
  const [rgbVal, setRgbVal] = useState('');
  const [schemes, setSchemes] = useState({});
  const [colorName, setColorName] = useState('');
  const [displayFullDetails, setDisplayFullDetails] = useState(false);

  return (
    <div className='App'>
      <h1 className='site-title'>
        <Link to='/'>COLORS</Link>
      </h1>
      <h2 className='color-title'>{colorName}</h2>
      {displayFullDetails && (
        <h3 className='main-col-deets'>{`${schemes.seed.hex.value} - ${schemes.seed.rgb.value} - ${schemes.seed.hsl.value} - ${schemes.seed.cmyk.value}`}</h3>
      )}
      <Routes>
        <Route
          path='/'
          element={
            <Home
              rgbVal={rgbVal}
              setRgbVal={setRgbVal}
              setSchemes={setSchemes}
              colorName={colorName}
              setColorName={setColorName}
            />
          }
        />
        <Route
          path='/schemes'
          element={
            <Schemes
              rgbVal={rgbVal}
              schemes={schemes}
              colorName={colorName}
              setSchemes={setSchemes}
              displayFullDetails={displayFullDetails}
              setDisplayFullDetails={setDisplayFullDetails}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
