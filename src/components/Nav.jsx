import React from "react";
import "./css/nav.css";
import Img from "./img/Img2.png";
function Nav() {
  return (
    <>
    
      <div className="nav">
        <div className="nav_img">
          <img src={Img} alt="" />
        </div>
        <div className="content">Moves app</div>
        <div className=""></div>
      </div>
    </>
  );
}

export default Nav;
