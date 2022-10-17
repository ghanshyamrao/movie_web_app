import React,{setState} from "react";
import "./css/popup.css";

const PopUp=(props)=>{
  return (
    <React.Fragment>
      <div className="popup">
        <div className="pop_img">
          <img src={props.image} alt="" />
        </div>
        <div className="item">
          <h3 className="avenger">{props.moviename}</h3>
          <div className="sub_item">
          <h6>PLOT:</h6> <p>
              {props.summary}
              </p>
          </div>
          <div className="sub_item">
          <h6>Genre:</h6> <p>
              {props.mtype}
              </p>
          </div>
          <div className="sub_item">
          <h6>IMDB RATING:</h6> <p>
              {props.ratting}
              </p>
          </div>
          <div className="sub_item">
          <h6>Released year:</h6> <p>
              {props.year}
              </p>
          </div>
            
        </div>
      </div>
    </React.Fragment>
  );
};

export default PopUp;
