import { useState } from "react";

// import './App.css'
import Navbar from "./components/Navbar";
import Video from "./components/Video";

import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/video" element={<Video />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
