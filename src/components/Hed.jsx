import React from "react";
import "./css/hed.css";

import capt from "./img/capt.jpg";
import { PopUp, Img, Nav, Search, Popular, Grid ,LoadMorebtn,} from "../components";
function Hed({ movietitle, moviedesc,pop ,img}) {
  return (
    <React.Fragment>
      <div className="img_avg">
        {pop}
        <div className="title_disc">
          <h1 className="movie_title">{movietitle}</h1>
          <p className="movie_disc">{moviedesc}</p> 
        </div>
      </div>
    </React.Fragment>
  );
}

export default Hed;
