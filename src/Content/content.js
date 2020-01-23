import React, { Component } from "react";
import "./content.css";
import photo from "..//Assets/images.jpg"

class Content extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <img className="photo" src= {photo} ></img>
        </div>
      </div>
    );
  }
}

export default Content;
