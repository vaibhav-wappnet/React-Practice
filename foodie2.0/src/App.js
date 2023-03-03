import React from 'react'
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
