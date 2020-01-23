import React, { Component } from "react";
import "./App.css";
import Header from "./Header/header.js";
import Content from "./Content/content.js";
import Feature from "./Feature/Feature.js"
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="sticky">
          <Header />
        </div>
        <Content />
        <div className="displayText">
          <Feature />
        </div>
      </div>
    );
  }
}

export default App;
