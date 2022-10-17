import React from "react";
import { Component } from "react";
import { Hed, Img, Nav, Search, Popular, Grid, LoadMorebtn } from "../components";
import "./css/Home.css";
import { Link } from "react-router-dom";
import img from "./img/avengers.jpg";
export default class Home extends Component {

  constructor(img) {
    super(img);
    this.image = img
  }
  state = {
    movies: [],
    heroimg: null,
    current_page: 4,
    totalpage: 0,
    searchItem: "",
  };
  //changing the current_page to load more content
  loadmore = () => {

    this.setState({
      current_page: this.state.current_page += 4
    })
   

  }
  //fetching data
  componentDidMount() {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '45a51f7499msh834cf3552969f4cp1f0b06jsn609f25c3a713',
        'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
      }
    };
    fetch('https://ott-details.p.rapidapi.com/advancedsearch?start_year=1970&end_year=2020&min_imdb=6&max_imdb=7.8&genre=action&language=english&type=movie&sort=latest&page=1', options)
      .then(response => response.json())
      .then(response =>{ this.setState({
          movies:[...this.state.movies,...response.results]
      })})
  }

  render() {
    return (
      <>
        <div className="all">
          <Hed
            img={img}
            movietitle="Avengers:   Infinity War"
            moviedesc="Avengers: Infinity War is a 2018 American superhero film based on the Marvel Comics superhero team the Avengers. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sequel to The Avengers (2012) and Avengers: Age of Ultron (2015)"
          />
          <Search />
        </div>
        <div className="box">
          <div className="pop">
            <h2>Popular Movies</h2>
            <div className="g" >
              <div className="grid">
              {this.state.movies.slice(0, `${this.state.current_page}`).map((e) => {
                return <Link to={`/moviepage/${e.imdbid}`}><Grid imgurl={e.imageurl}/> </Link>
              })}
              </div>
            </div>
          </div>
        </div>
        <div className="btn-container">
          <button className="btn" onClick={this.loadmore}>Load more..</button>
        </div>

      </>
    );
  }
}
