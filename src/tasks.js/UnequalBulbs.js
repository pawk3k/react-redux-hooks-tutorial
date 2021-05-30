import React, { useState, useEffect, useRef, useContext } from 'react';

import '../styles.css';

const Wrapper = (props) => <>{props.children}</>;

//TODO create React Context

function SingleBulb() {
  //TODO get value from context
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
      //TODO wrap in context Provider and assign value
      <Wrapper>
        <SingleBulb />
      </Wrapper>
      <Wrapper>
        <Wrapper>
          <SingleBulb />
          <SingleBulb />
        </Wrapper>
      </Wrapper>
    </>
  );
}
export default UnequalBulbs;
