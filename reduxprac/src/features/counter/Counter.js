import React from 'react';
import { increment, decrement } from './counterSlice';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  ;
  const dispatch = useDispatch();
  return (
    <div>
      <button
        className="content"
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <h2 className="content">COUNT: {count}</h2>
      <button
        className="content"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
