// import React from 'react'
import './App.css';
function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>Company</li>
        <li>Home</li>
        <li>
          <select>
            <option >Gallery</option>
            <option >2019</option>
            <option >2018</option>  
            <option >2017</option>
          </select>
        </li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;
