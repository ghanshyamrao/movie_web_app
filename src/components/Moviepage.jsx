import React from "react";
import { Component } from "react";
import {
  Hed,
  Img,
  Nav,
  Search,
  Popular,
  Grid,
  LoadMorebtn,
  PopUp,
} from "../components";
import duration_icon from "./img/icon1.png";

import budget_icon from "./img/icon2.png";

import revenue_icon from "./img/icon3.png";
import "./css/Home.css";
import { Link } from "react-router-dom";
import "./css/movie.css";

import axios from "axios";
export default class Home extends Component {
  constructor() {
    super();
    this.duration = " 2h 39min";
    this.buget = " $456000";
    this.revenue = " $400,500,4500";
  }

  state = {
    movies: [],
    heroimg: null,
    current_page: 0,
    totalpage: 0,
    searchItem: "",
  };

  btn = () => {
    this.setState((this.state.current_page += 1));
    console.log(this.state.current_page);
  };
  componentDidMount() {
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
      .then((data) => {
        this.setState({
          movies: [...this.state.movies, ...data.actors],
        });
      });
  }
  render() {
    return (
      <>
        <div className="all">
          <div className="link">
            <Link to="/">
                <div className="Home_link">Home</div> {}</Link>
          </div> 
         
          <Hed
            pop={
              <PopUp
                summary="The super hero movie, all the hero save the world to the villans and save the world all super hero came back and to gether."
                director="russo brother"
                mtype="action"
                ratting="8.2"
              />
            }
          />
          <div className="movie_t_b_r">
            <p>
              <img className="icon" src={duration_icon} alt="" />
              {this.duration}{" "}
            </p>
            <p>
              <img className="icon" src={budget_icon} alt="" />
              {this.buget}{" "}
            </p>
            <p>
              <img className="icon" src={revenue_icon} alt="" />
              {this.revenue}{" "}
            </p>
          </div>
        </div>
        <div className="container">
          <div className="pop">
            <h2>Actor</h2>
            <div className="grid">
              <div className="container text-center">
                <div className="row">
                  {this.state.movies.map((Element, i) => {
                    return <Grid moviename={Element.name} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="btn btn-dark" onClick={this.btn}>
          {" "}
        </button>
        {/* // <LoadMorebtn /> */}
      </>
    );
  }
}
