import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Men from "./components/Men";
import Women from "./components/Women";
import Kids from "./components/Kids";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Men" element={<Men/>} />
        <Route path="/Women" element={<Women/>}/>
        <Route path="/Kids" element={<Kids/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
