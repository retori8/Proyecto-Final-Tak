import React from "react";
import "../../../styles/random.css"


export const CardChallenge = (props) => {
  return (
    <div class="col m-2" >
      <div className="card-random">
        <h3 className="text-random">{props.random}</h3>
      </div>
      <button type="button" onClick={props.click} className="col-11 btn btn-outline-dark btn-lg m-2 ms-4">Acepto el desafío</button>
    </div>
  );
};