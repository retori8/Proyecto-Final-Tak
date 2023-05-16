import React from "react";
import "../../../styles/random.css"


export const CardChallenge = (props) => {
  return (
    <div className="col cont-random-card" >
      <div className="cont-img-random">
        <img className="img-card-random" src="http://localhost:3000/img/flor.png"></img>
      </div>
      <div className="card-random">
        <h3 className="text-random">{props.random}</h3>
      </div>
      <button type="button" onClick={props.click} className="col-12 btn-random">Acepto el desafío</button>
    </div>
  );
};