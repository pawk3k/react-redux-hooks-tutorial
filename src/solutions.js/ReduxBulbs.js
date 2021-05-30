import React, { useState, useEffect, useRef, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSlice } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import '../styles.css';

export const slice = createSlice({
  name: 'counter',
  initialState: {
    value: 1,
  },
  reducers: {
    increase: (state) => {
      state.value += 0.2;
    },
    decrease: (state) => {
      state.value -= 0.2;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: slice.reducer,
  },
});

const selectCount = (state) => state.counter.value;

const Wrapper = (props) => <>{props.children}</>;

const { increase, decrease } = slice.actions;
function SingleBulb() {
  const sizeValue = useSelector(selectCount);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increase());
  };
  const handleDecrease = () => {
    dispatch(decrease());
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
