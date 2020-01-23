import React, { Component } from "react";
import "./ColumnText.css";

class ColumnText extends Component {
  render() {
    return (
      <div className="App">
        <div className="contentText">
          <h2> El desmogue del ciervo</h2>
          <p>
            Cuando se caen las cuernas, éstas vuelven a crecer poco a poco
            (tardan entre 12 y 18 semanas en crecer), y durante el tiempo que
            los machos no tienen cuernas se sienten más vulnerables. Por este
            motivo suelen buscar refugio entre la maleza y son más difíciles de
            observar. Si el macho es joven (menos de dos años) es normal que le
            crezcan solo unas astas sin ningunas puntas, al año siguiente ya
            desarrollará una cornamenta con más puntas.
          </p>
          <p>
            Una vez que empiezan a crecer las nuevas cuernas, hasta final de
            primavera permanecerán cubiertas de una delicada piel o terciopelo
            (llamada borra). Una vez que la cuerna haya crecido del todo, el
            cérvido se restriega contra los árboles y las ramas para deshacerse
            de la borra y dejar paso a la cornamenta. A finales de verano, este
            proceso ya habrá terminado y así el macho estará listo de nuevo para
            la época de la berrea y del celo. Este proceso se repite año tras
            año y conforme más adulto es el ciervo (o el resto de animales que
            también hacen el desmogue) mayor es el tamaño de las cuernas.
          </p>
        </div>
      </div>
    );
  }
}

export default ColumnText;
