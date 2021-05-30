import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import Bulb from './tasks.js/Bulb';
import BulbColored from './tasks.js/BulbsColored';
import BulbAutomated from './tasks.js/BulbAutomated';
import BulbResizable from './tasks.js/BulbResizeAble';
import UnequalBulbs from './tasks.js/UnequalBulbs';
import ReduxBulbs from './tasks.js/ReduxBulbs';
import './styles.css';

function App() {
  return (
    <div className='App'>
      {/* <p>Task 1:</p>
      <Bulb />
      <p>Task 2:</p>
      <BulbColored />
      <p>Task 3:</p>
      <BulbAutomated />
      <p>Task 4:</p>
      <BulbResizable />
      <p>Task 5:</p>
      <UnequalBulbs />
      <p>Task 6:</p>
      <ReduxBulbs /> */}
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
