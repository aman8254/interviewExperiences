import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from './Components/NavBar';
import Contribute from "./Pages/Contribute";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contribute" element={<Contribute />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
