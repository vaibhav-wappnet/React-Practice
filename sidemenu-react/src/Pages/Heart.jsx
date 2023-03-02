import React from 'react'
import * as FaIcons from "react-icons/fa";
import "../Styles/Navbar.css";
const Heart = () => {
  return (
    <div className="Heart">
      <h1 className="heart-icon">
      <FaIcons.FaHeart />
      </h1>
      <h1>Have a Good Day :)</h1>
    </div>
  )
}

export default Heart;