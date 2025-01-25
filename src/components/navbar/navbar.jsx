import { useState } from 'react';
import "./Navbar.css";
import Logo from "../../assets/imges/CAScade.png";
import { useNavigate } from 'react-router';

function Navbar() {

  const navigate = useNavigate();

  return (
    <div className = "nav-bar-container">
      <img src={Logo} alt="Logo" className="nav-logo"/>
      <nav>
        <ul>
          <li><div>Home</div></li>
          <li><div>Create your waterfall charts</div></li>
          <li><div>Storage</div></li>
        </ul>
      </nav>  
    </div>
  )
}

export default Navbar;