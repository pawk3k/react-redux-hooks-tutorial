import React from 'react';
import '../styles.css';

function Bulb() {
  //TODO add `useState` to turn light on and off
  return (
    <>
      <img src={true ? `bulb-on.svg` : 'bulb-off.svg'} />
      <button onClick={handleOn}>On</button>
      <button onClick={handleOff}>Off</button>
      <button onClick={handleColorChange}>Change color</button>
    </>
  );
}
export default Bulb;
