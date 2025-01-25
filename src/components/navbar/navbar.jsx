import { useState } from 'react';
import "./Navbar.css";
import Logo from "../../assets/imges/CAScade.png";
import { useNavigate } from 'react-router';

function Navbar() {

  const navigate = useNavigate();

  return (
    <>
    <div className="nav-bar-temp"></div>
    <div className = "nav-bar-container">
      <img src={Logo} alt="Logo" className="nav-logo"/>
      <nav>
        <ul>
          <li onClick={() => {navigate("/")}}><div>Home</div></li>
          <li onClick={() => {navigate("/create")}}><div>Create your waterfall charts</div></li>
          <li onClick={() => {navigate("/storage")}}><div>Storage</div></li>
        </ul>
      </nav>  
    </div>
    </>
  )
}

export default Navbar;