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
import duration_icon  from './img/icon1.png'

import budget_icon from './img/icon2.png'

import revenue_icon from './img/icon3.png'
import "./css/Home.css";
import { Link } from "react-router-dom";
import './css/movie.css'
export default class Home extends Component {

    constructor(){
        super()
        this.duration= ' 2h 39min'
        this.buget = ' $456000'
        this.revenue=' $400,500,4500'

    }

  state = {
    movies: [],
    heroimg: null,
    current_page: 0,
    totalpage: 0,
    searchItem: "",
  };

  componentDidMount() {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "45a51f7499msh834cf3552969f4cp1f0b06jsn609f25c3a713",
        "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
      },
    };
    fetch(
      "https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          movies: [...this.state.movies, ...response.d],
          heroimg: this.state.heroimg,
          current_page: response.v,
        });
      });
  }

  render() {
    return (
      <>
        <div className="all">
          {/* <div className="link">
            <Link to="/">
                <div className="Home_link">Home</div> {}</Link>
          </div> */}
           <div className="Home_link">Home</div>
          <Hed
           pop={<PopUp/>}
          />
          <div className="movie_t_b_r">
                  <p><img className="icon"  src={duration_icon} alt="" />{this.duration} </p>
                  <p><img className="icon" src={budget_icon} alt="" />{this.buget} </p>
                  <p><img className="icon" src={revenue_icon} alt="" />{this.revenue} </p>
           </div>
        </div>
        <div className="container ">
          <div className="pop">
            <h2>Actor</h2>
            <div className="grid">
              <div class="container text-center">
                <div class="row">
                  {this.state.movies.slice(0,3).map((Element, i) => {
                    return (
                      <Link to="/moviepage">
                        <Grid image={Element.i.imageUrl} />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <LoadMorebtn />
      </>
    );
  }
}
