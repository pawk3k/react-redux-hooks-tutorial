import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

function Bulbs() {
  return (
    <>
      <div className={'bulb-on'} />
      <button onClick>On</button>
      <button onClick>Off</button>

      <div className={'bulb-off'} />
      <button onClick>On</button>
      <button onClick>Off</button>
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
