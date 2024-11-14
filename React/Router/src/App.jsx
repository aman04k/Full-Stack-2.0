import { useState } from "react";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Doctors from "./Pages/Doctor";
import Treatment from "./Pages/Treatement";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/treatment" element={<Treatment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
