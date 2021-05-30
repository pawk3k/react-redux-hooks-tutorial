import React, { useState, useEffect, useRef, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSlice } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import '../styles.css';

export const slice = createSlice({
  name: 'bulbs',
  initialState: {
    size: 1,
  },
  reducers: {
    increase: (state) => {
      state.size += 0.2;
    },
    //TODO implement decrease by yourself
  },
});

const store = configureStore({
  reducer: {
    counter: slice.reducer,
  },
});

const selectCount = (state) => state.counter.size;

const Wrapper = (props) => <>{props.children}</>;

const { increase, decrease } = slice.actions;
function SingleBulb() {
  //TODO get value from store 
  //TODO get dispatch to setStore values Hint => As in lecture

  const handleIncrease = () => {
    dispatch(increase());
  };
  const handleDecrease = () => {
    //TODO make it functional
  };
  return (
    <>
      <img
        src={true ? 'bulb-on.svg' : 'bulb-off.svg'}
        style={{
          width: 100 * sizeValue,
          height: 100 * sizeValue,
        }}
      />
      <button onClick={handleIncrease}>increase</button>
      <button onClick={handleDecrease}>decrease</button>
    </>
  );
}

function ReduxBulbs() {
  return (
    <>
      <Provider store={store}>
        <Wrapper>
          <SingleBulb />
        </Wrapper>
        <Wrapper>
          <Wrapper>
            <SingleBulb />
            <SingleBulb />
          </Wrapper>
        </Wrapper>
      </Provider>
    </>
  );
}
export default ReduxBulbs;
