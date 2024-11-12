import { useState } from 'react'
import {BrowserRouter, Routes, Route}

// import './App.css'
// import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>

    <Routes>
    
    <Route path="homepage" elemebt={<Home />} />

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
