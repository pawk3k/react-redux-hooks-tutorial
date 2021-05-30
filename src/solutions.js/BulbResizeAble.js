import React, { useState, useEffect, useRef, useReducer } from 'react';
import ReactDOM from 'react-dom';

import '../styles.css';

const bulbColors = ['bulb-green', 'bulb-red', 'bulb-blue'];

function reducer(state, action) {
  switch (action.type) {
    case 'increase':
      return { size: state.size * 2 };
    case 'decrease':
      return { size: state.size / 2 };
    default:
      throw new Error();
  }
}

function BulbResizable() {
  const [isOn, setIsOn] = useState(true);
  const [color, setColor] = useState('bulb-on');
  const mutableRef = useRef(0);
  const [state, dispatch] = useReducer(reducer, { size: 1 });
  const handleIncrease = () => {
    dispatch({ type: 'increase' });
  };
  const handleDecrease = () => {
    dispatch({ type: 'decrease' });
  };
  const handleColorChange = () =>
    setColor(bulbColors[Math.ceil(Math.random() * 3 - 1)]);

  useEffect(() => handleColorChange(), []);

  useEffect(() => {
    mutableRef.current++;
  });

  return (
    <>
      <img
        src={isOn ? `${color}.svg` : 'bulb-off.svg'}
        style={{
          width: 100 * state.size,
          height: 100 * state.size,
        }}
      />
      <button onClick={handleIncrease}>increase</button>
      <button onClick={handleDecrease}>decrease</button>
    </>
  );
}
export default BulbResizable;
