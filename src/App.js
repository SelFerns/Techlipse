import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Coord from "./pages/Coordinators"
import Register from "./pages/Register"
import Schedule from "./pages/Schedule"

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Coordinators" element={<Coord />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Schedule" element={<Schedule />} />
        </Routes>
      </Router>
    </>
  );
}