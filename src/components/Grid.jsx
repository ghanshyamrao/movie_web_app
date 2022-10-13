import React from "react";
import img from './img/Avg.jpg'
import './css/grid.css'

const Grid = (props) => {
  return (
    <>
    <div className="card">

    <img src={props.image} className="card-img-top" alt="..."/>
    <p>{props.moviename}</p>
    </div>
    </>
  );
};

export default Grid;
