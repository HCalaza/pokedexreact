import React, { Component } from "react";
import "./Feature.css";
import FeatureDetail from "../Components/FeatureDetail.js"
import Pokemon from "../Pokemon/Pokemon.js"
class Feature extends Component {
  render() {
    const PokeObject = new Pokemon();
const entrada = PokeObject.getData()
const salida = entrada.map ((i) => <FeatureDetail title={i.name} bodyText= {i.id} />)
    return (
      <div className="App">
        <div className="feature">
        {salida}
        </div>
      </div>
    );
  }
}

export default Feature;
