import React from "react";
import "../../styles/challenge.css";

export const Fail21Days = () => {
	return (
		
  <div
    className="ImageBackgroundWrap Background-fixed"
    style={{
      backgroundImage: "url( https://www.w3schools.com/howto/img_parallax.jpg)"
    }}
  >
    <div className="ImageInnerWrap">
      <div className="TextBackground">
        <div>
          <h2>HAS PERDIDO LA CONTINUIDAD DEL DESAFIO 21 DIAS</h2>
        </div>
		<br />
        <div>
          <p>
            PERO NO TE DESANIMES,, SIEMPRE SE PUEDE VOLVER A EMPEZAR !
          </p>
		  <button type="button" class="btn btn-outline-light">QUIERO INTENTARLO OTRA VEZ</button>
        </div>
      </div>
    </div>
  </div>
	);
};