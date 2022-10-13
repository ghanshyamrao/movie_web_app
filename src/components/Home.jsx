import React from "react";
import { Component } from "react";
import { Hed, Img, Nav, Search, Popular, Grid ,LoadMorebtn} from "../components";
import "./css/Home.css";
import { Link } from "react-router-dom";
export default class Home extends Component {
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
              <div class="container text-center">
                <div class="row">
                  {(this.state.movies).slice(0,3).map((Element, i) => {
                    return (<Link to='/moviepage'> <Grid image={Element.i.imageUrl}/>  </Link>)
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <LoadMorebtn/>
      </>
    );
  }
}
