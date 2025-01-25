import { useState } from "react";
import "./index.css";
import "./App.css";
import Test from "./components/Test";
import Navbar from "./components/navbar/navbar";
import { Route, Routes } from "react-router";
import Homepage from "./components/homepage/homepage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/create" element={}/>
        <Test />
      </Routes>
    </div>
  );
}

export default App;
