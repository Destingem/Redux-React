import classes from './Counter.module.css';
import redux, {store} from "../store/index";
import {useDispatch, useSelector} from "react-redux"
import React, { useEffect, useRef } from "react"
const Counter = () => {
  const toggleCounterHandler = (props) => {
    const typeofAction = (props.target.className)
    const value = (inputRef.current.value);
    dispatch({type: typeofAction, value: value})
  };
  const counterRedux = useSelector((state)=> {return state.counter})
  const showRedux = useSelector((state)=> {return state.show})
  const dispatch = useDispatch()
  let inputRef = useRef()

  let counter = <div className={classes.value}>{counterRedux}</div>
  return (
    <main className={classes.counter}>
    <h1>Counter</h1>
      {showRedux ? counter  : null}
      <input ref={inputRef}></input>
      <button onClick={toggleCounterHandler} className='INCREMENT'>Increment</button>
      <button onClick={toggleCounterHandler} className='DECREMENT'>Decrement</button>
      <button onClick={toggleCounterHandler} className='PLUS X'>PLUS X</button>
      <button onClick={toggleCounterHandler} className='CLEAR'>CLEAR</button>
      <button onClick={toggleCounterHandler} className='SHOW'>Toggle Counter</button>

    </main>
  );
};

export default Counter;
