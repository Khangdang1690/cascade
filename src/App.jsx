import { useState } from "react";
import "./index.css";
import "./App.css";
import Test from "./components/Test";
import Navbar from "./components/navbar/navbar";
import { Route, Routes } from "react-router";
import Homepage from "./components/homepage/homepage";
import Storage from "./components/storage/storage";
import PreTest from "./components/PreTest";
import Footer from "./components/footer/Footer"

function App() {
  return (
    <div>
      <Navbar />
      <Footer />
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/create" element={<PreTest />}/>
        <Route path="/storage" element={<Storage />}/>
        <Route path="*" element={<div style={{color: "white"}}>404 Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
