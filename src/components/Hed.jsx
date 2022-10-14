import React from "react";
import "./css/hed.css";
import Avg from "./img/img3.jpg";
import capt from "./img/capt.jpg";
import { PopUp, Img, Nav, Search, Popular, Grid ,LoadMorebtn,} from "../components";
function Hed({ movietitle, moviedesc,pop }) {
  return (
    <React.Fragment>
      <div className="img_avg">
        {pop}
        <div className="title_disc">
          <h2 className="movie_title">{movietitle}</h2>
          <p>{moviedesc}</p> 
        </div>
      </div>
    </React.Fragment>
  );
}

export default Hed;
