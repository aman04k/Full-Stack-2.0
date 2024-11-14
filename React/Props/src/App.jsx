import { useState } from 'react'

import './App.css'
import Form from './components/Form'
import Blogs from './components/Blogs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Blogs />
      <Form />
    </>
  )
}

export default App
