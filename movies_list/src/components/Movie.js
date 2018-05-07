import React, { Component } from 'react';

class Movie extends Component {
  render(){
    return (
      <ul className = "movie">
        <h3>{this.props.title}</h3>
        <a href={this.props.url} > Movie details </a>
      </ul>
    )
  }
}

export default Movie;
