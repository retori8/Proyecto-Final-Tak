import React from "react";
import "../../styles/challenge.css";

export const Fail21Days = () => {
	return (
		
  <div
    className="ImageBackgroundWrap Background-fixed"
    style={{
      backgroundImage: "url(https://ychef.files.bbci.co.uk/1600x900/p0bzmxtx.webp)"
    }}
  >
    <div className="ImageInnerWrap">
      <div className="TextBackground">
        <div>
          <h2>HAS PERDIDO LA CONTINUIDAD DEL DESAFIO 21 DIAS</h2>
          <h5>
            PERO NO TE DESANIMES,, SIEMPRE SE PUEDE VOLVER A EMPEZAR !
          </h5>
          <br/>
		      <button type="button" class="btn btn-outline-light">QUIERO INTENTARLO OTRA VEZ</button>
        </div>
      </div>
    </div>
  </div>
	);
};