import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

const bulbColors = ['bulb-green', 'bulb-red', 'bulb-blue'];

function Bulbs() {
  const [isOn, setIsOn] = useState(false);
  const [color, setColor] = useState('bulb-on');
  const handleOn = () => setIsOn(true);
  const handleOff = () => setIsOn(false);
  const handleColorChange = () =>
    setColor(bulbColors[Math.ceil(Math.random() * 2)]);
  return (
    <>
      <div>
        <img src={isOn ? `${color}.svg` : 'bulb-off.svg'} />
      </div>
      <button onClick={handleOn}>On</button>
      <button onClick={handleOff}>Off</button>
      <button onClick={handleColorChange}>Change color</button>
    </>
  );
}
function App() {
  return (
    <div className='App'>
      <Bulbs />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
