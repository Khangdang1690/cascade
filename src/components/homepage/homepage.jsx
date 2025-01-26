import { useState } from "react";
import Theme from "../../assets/imges/theme.png";
import "./homepage.css";

function Homepage() {
  return (
    <>
    <div className="block-home">
    <div className="block-text">
      <h1 className="title">CAScade _</h1>
        <div className="description">
          visualize your process and milestones with
          <div className="text-color gradient-text">
              waterfall charts
          </div>
        </div>
        </div>

        <img src={Theme} alt="Theme" className = "image-des"/>
    </div>
    </>
  )
}

export default Homepage;
