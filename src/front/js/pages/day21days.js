import React from "react";
import "../../styles/challenge.css"
//import Gratitud from"../../img/Gratitud.mp3"

export const DayOf21Days = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-3 mt-4 me-5" >
                    <h2 className="text-center my-4">Estas en tu dia 1</h2>
                    <audio src="" controls="controls" preload="none">
                    </audio>
                    <button type="button" className="btn btn-outline-light btn-lg mt-3 ms-5">COMENZAR DESAFIO </button>
                </div>
                <div className="animacion col-8 mt-4 ms-3">
                </div>
            </div>
        </div>
    );
};