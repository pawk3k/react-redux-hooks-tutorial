import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

function Bulbs() {
  const [isOn, setIsOn] = useState(false);
  const handleOn = () => setIsOn(true);
  const handleOff = () => setIsOn(false);

  return (
    <>
      <div className={isOn ? 'bulb-on' : 'bulb-off'} />
      <button onClick={handleOn}>On</button>
      <button onClick={handleOff}>Off</button>
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
