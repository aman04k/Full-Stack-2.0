import React, { useState } from 'react'

function State() {
   const [state, setState]  = useState(0)
   // useState is always inside a component
   // useState returns 2 values => 1. state variable 2. a function to  change the state
   //we can't change state directly
   // we have to use the function to change the state

    let count = 0
    

    function increment() {
        count = count + 1
        console.log(count)
    }

    function incrementState() {
        setState(state + 1)
    }
   return (
    <div>
       
       <p>{count}</p>
       <p>state is {state}</p>
       <button onClick={increment}>increment</button>
       <button onClick={incrementState}>incrementState</button>
       
    
    </div>
  )
}

export default State
