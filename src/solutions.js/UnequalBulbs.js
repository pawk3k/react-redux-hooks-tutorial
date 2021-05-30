import React, { useState, useEffect, useRef, useContext } from 'react';

import '../styles.css';

const bulbColors = ['bulb-green', 'bulb-red', 'bulb-blue'];

const Wrapper = (props) => <>{props.children}</>;

const SizeContext = React.createContext(1);

function SingleBulb() {
  const context = useContext(SizeContext);
  return (
    <>
      <img
        src={true ? 'bulb-on.svg' : 'bulb-off.svg'}
        style={{
          width: 100 * context.size,
          height: 100 * context.size,
        }}
      />
    </>
  );
}

function UnequalBulbs() {
  return (
    <>
      <SizeContext.Provider value={{ size: 2 }}>
        <Wrapper>
          <SingleBulb />
        </Wrapper>
        <Wrapper>
          <Wrapper>
            <SingleBulb />
            <SingleBulb />
          </Wrapper>
        </Wrapper>
      </SizeContext.Provider>
    </>
  );
}
export default UnequalBulbs;
