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
} from "../components";
import "./css/Home.css";
import { Link } from "react-router-dom";
import axios from "axios";
export default class Home extends Component {
  state = {
    movies: [],
    heroimg: null,
    current_page: 0,
    totalpage: 0,
    searchItem: "",
  };

  btn = () => {
    this.setState({ current_page: (this.state.current_page += 1) });
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
          heroimg:this.state.heroimg= data.image
        });
        console.log(data);
      });
  }

  render() {
    return (
      <>
        <div className="all">
          <Hed
            movietitle="Avangers"
            moviedesc="Marval studio of super hero story  "
          />
          <Search />
        </div>
        <div className="container ">
          <div className="pop">
            <h2>Popular Movies</h2>
            <div className="grid">
              <div className="container text-center">
                <div className="row">
                  {this.state.movies.map((Element, i) => {
                    return (
                      <Link to='/moviepage'>
                        <Grid key={i} image={this.state.heroimg
                        } 
                         />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="btn btn-dark" onClick={this.btn}>
          {" "}
        </button>

        {/* <LoadMorebtn /> */}
      </>
    );
  }
}
