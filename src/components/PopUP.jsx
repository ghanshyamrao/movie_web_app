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
          <h3 className="avenger">{props.moviename}</h3>
          <div className="sub_item">
          <h6>PLOT:</h6> <p>
              {props.summary}
              </p>
          </div>
          <div className="sub_item">
          <h6>DIRECTORS:</h6> <p>
              {props.director}
              </p>
          </div>
          <div className="sub_item">
          <h6>IMDB RATING:</h6> <p>
              {props.ratting}
              </p>
          </div>
            
        </div>
      </div>
    </React.Fragment>
  );
};

export default PopUp;
