import { useState } from 'react'

import './App.css'
import Event from './Events/Event'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Event />
    </>
  )
}

export default App
