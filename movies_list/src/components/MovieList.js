import React, { Component } from 'react';
import Movie from './Movie.js'

class MovieList extends Component {
  render(){

    const movieNodes = this.props.data.map((movie) => {
    return(
      <Movie title={movie.title} url={movie.url} key={movie.id} ></Movie>
    );
  });

    return (
      <div className="movie-list">
      {movieNodes}
      </div>
    );
  }
}

export default MovieList;
