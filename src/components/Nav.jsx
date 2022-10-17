import React from "react";
import "./css/nav.css";
import Img from "./img/Img2.png";
import Img2 from "./img/popcorn.png";

function Nav() {
  return (
    <React.Fragment>
      <div className="nav">
        <div className="nav_img">
          <img src={Img} alt="" />
        </div>
        <div className="content">React Movie</div>
        <div className="nav_img2">
        </div>
      </div>
    </React.Fragment>  
  );
}

export default Nav;
