import React, { Component } from "react";
import "./FeatureDetail.css";

class FeatureDetail extends Component {
  render() {
    return (
      <div className="App">
        <div className="cardWrapper">
            <div className = "image">
            </div>
            <div className ="textWrapper">
            <div className ="title">
              <h2> {this.props.title} </h2>
            </div>
            <div className ="bodyText">
              <p> {this.props.bodyText}</p>
            </div>

</div>









        </div>
      </div>
    );
  }
}

export default FeatureDetail;
