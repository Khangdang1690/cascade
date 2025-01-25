import { useState } from "react";
import "./index.css";
import "./App.css";
import Test from "./components/Test";
import Navbar from "./components/navbar/navbar";
import { Route, Routes } from "react-router";
import Homepage from "./components/homepage/homepage";
import PreTest from "./components/PreTest";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/create" element={<PreTest />}/>
      </Routes>
    </div>
  );
}

export default App;
