import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementWhitchCheckingAction, increment } from '../app/features/Counter/actions';

const Counter = () => {
let {count} = useSelector(state =>  state.counter)
const dispatch = useDispatch();

  return (
    <div>
        <h1>Belajar Redux Studi Kasus Counter</h1>
       <button onClick={() => dispatch(decrementWhitchCheckingAction(1))}>-</button>
       {'  '}    <span>{count}</span>   {'  '}
       <button onClick={() =>dispatch(increment(1))}>+</button>

    </div>
  )
}

export default Counter
