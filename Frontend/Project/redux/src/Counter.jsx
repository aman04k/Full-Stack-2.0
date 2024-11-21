import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increseByValue } from './redux/counterReducer'

function Counter() {
    const count=useSelector(state=>state.counterReducer.counter)
    const dispatch=useDispatch()
    // console.log(count)
  return (
    <div>
        <button onClick={()=>dispatch({type:'INCREMENT'})}>increase</button>
      <h1>Count Value  {count} </h1>
      <button onClick={()=>dispatch({type:'DECREMENT'})} >decrease</button><br />
      <button onClick={()=>dispatch({type:'INCREASEBYVALUE',payload:45})}>increase 5</button>
      <button onClick={()=>dispatch(increseByValue(40))}>increseByValue</button>
    </div>
  )
}

export default Counter

