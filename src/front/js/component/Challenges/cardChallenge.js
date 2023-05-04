import React from "react";
import "../../../styles/challenge.css"


export const CardChallenge = (props) => {
  return (
    <div class="col m-2" >
      <div className="card text-bg-dark p-5" id="cardChallenge">
          <h3 className="card-title text-center p-4 pt-5 m-4">{props.random}</h3>
      </div>
      <button type="button" onClick={props.click} className="col-11 btn btn-outline-light btn-lg m-2 ms-4">INGRESA</button>
    </div>
  );
};