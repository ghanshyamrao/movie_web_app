import React,{setState} from "react";
import "./css/popup.css";
import img from "./img/capt.jpg";
import axios from "axios";

const PopUp=(props)=>{

   const movie = ({
    gerne:[]
   })

   


  const compo=()=> {
    const options = {
      method: "GET",
      url: "https://movie-details1.p.rapidapi.com/imdb_api/movie",
      params: { id: "tt1375666" },
      headers: {
        "X-RapidAPI-Key": "45a51f7499msh834cf3552969f4cp1f0b06jsn609f25c3a713",
        "X-RapidAPI-Host": "movie-details1.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then((response) => response.data)
      .then((data)=>{
        for(let i=0;i<data.genres.length;i++){
          movie.gerne.push(data.genres[i])
          console.log(data.genres[i])
        }
      })
      
      
      
  }
  compo()
  return (
    <React.Fragment>
      <div className="popup">
        <div className="pop_img">
          <img src={img} alt="" />
        </div>
        <div className="item">
          <div className="sub_item">
          <h6>summary of the movie:</h6> <p>
              {props.summary}
              </p>
          </div>
          
            <p>Director: {props.director}</p>
            <p>Movie type:{
              console.log(movie.gerne)}  </p>
            <p>IMDB Ratting : {props.ratting}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PopUp;
