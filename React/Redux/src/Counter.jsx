import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increaseByValue } from './redux/counterReducer'

function Counter() {
    const count = useSelector(state=> state.counterReducer.counter)
    const dispatch = useDispatch()
    console.log(count)
  return (
    <div>
      <h3>Update Value {count}</h3>
      <button onClick={()=>dispatch({type:'INCREMENT'})}>Increment</button>
      <button onClick={()=>dispatch({type:'DECREMENT'})}>Increment</button>
      <button onClick={()=>dispatch({type:'INCREMENTBYVALUE',payload:40})}>Increment by 40</button>
      <button onClick={()=>dispatch(increaseByValue(5))}>Increment by 5</button>

    </div>
  )
}

export default Counter
