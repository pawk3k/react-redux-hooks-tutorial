import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import '../styles.css';

const bulbColors = ['bulb-green', 'bulb-red', 'bulb-blue'];

function BulbAutomated() {
  const [isOn, setIsOn] = useState(true);
  const [color, setColor] = useState('bulb-on');
  const mutableRef = useRef(0);

  const handleOn = () => {
    setIsOn(true);
  };
  const handleOff = () => {
    setIsOn(false);
  };
  const handleColorChange = () =>
    setColor(bulbColors[Math.ceil(Math.random() * 3 - 1)]);

  useEffect(() => handleColorChange(), []);

  useEffect(() => {
    mutableRef.current++;
  });

  return (
    <>
      <p>Renders: {mutableRef.current}</p>
      <img src={isOn ? `${color}.svg` : 'bulb-off.svg'} />
      <button onClick={handleOn}>On</button>
      <button onClick={handleOff}>Off</button>
      <button onClick={handleColorChange}>Change color</button>
    </>
  );
}
export default BulbAutomated;
