import React, { useState } from "react";
import {
  Hed,
  Img,
  Nav,
  Search,
  Popular,
  Grid,
  Actor,
  LoadMorebtn,
  PopUp,
} from "../components";
import duration_icon from "./img/icon1.png";
import budget_icon from "./img/icon2.png";
import revenue_icon from "./img/icon3.png";
import "./css/Home.css";
import { Link, useParams } from "react-router-dom";
import "./css/movie.css";
import axios from "axios";
const Moviepage = () => {
  const par = useParams();
  const [mstate, setMstate] = useState({
    movies: [],
    image: [],
    moviename: "",
    genre: [],
    rank: 0,
    year: 0,
    synopsis: ""

  });
  const compo = () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '45a51f7499msh834cf3552969f4cp1f0b06jsn609f25c3a713',
        'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
      }
    };
    fetch('https://ott-details.p.rapidapi.com/advancedsearch?start_year=1970&end_year=2020&min_imdb=6&max_imdb=7.8&genre=action&language=english&type=movie&sort=latest&page=1', options)
      .then(response => response.json())
      .then(response => {
        for(let i = 0; i <51; i++){
          if(response.results[i].imdbid==par){
           return console.log('one',response.results[i])
          }else{
               setMstate({
                movies:[mstate.movies,response.results[i]]
               })  
          }
        }
      })
  }
  compo()
  console.log(mstate)

  return (
    <>
      <div className="all">
        <div className="link">
          <Link to="/">
            <div className="Home_link">Home / {mstate.movies[1].title}</div></Link>
        </div>
        <Hed
          pop={
            <PopUp
              image={mstate.movies[1].imageurl}
              moviename={mstate.movies[1].title}
              summary={mstate.movies[1].synopsis}
              mtype={mstate.movies[1].genre}
              ratting={mstate.movies[1].imdbrating}
              year={mstate.movies[1].released}
            />
          }
        />

      </div>
      <div className="actor">
        <h2>Actors</h2>
      </div>
      <div className="container">
        <div className="pop">
          <div className="grid">
            <div className="container text-center">
              <div className="row">

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Moviepage
