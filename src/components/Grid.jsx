import React from "react";
import img from './img/Avg.jpg'
import './css/grid.css'

const Grid = (props) => {
  console.log(props)
  return (
    <>
    <div className="card">
    <img src={props.imgurl} className="card-img-top" alt="..."/>
    </div>
    </>
  );
};

export default Grid;
