import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import Page from "./Layout/Page";

function App() {
  return (
    <>
    <Router>
   <Navbar/>
   <Routes>
   <Route path="/" element={<Page/>} />
   </Routes>
    </Router>
    </>
  );
}

export default App;