import { useState } from 'react'

import './App.css'
import ConditionalRendering from './State/ConditionalRendering'
// import State from './State/State'
// import Event from './Events/Event'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Event /> */}
     {/* <State /> */}
     <ConditionalRendering />
    </>
  )
}

export default App
