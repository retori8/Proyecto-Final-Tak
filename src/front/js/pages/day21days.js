import React from "react";
import "../../styles/challenge.css"
import { useContext } from "react";
import { Context } from "../store/appContext";
//import Gratitud from"../../img/Gratitud.mp3"

export const DayOf21Days = () => {

    const { store } = useContext(Context);
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-sm-12 mt-4 me-5" >
                    <h2 className="text-center my-4">Estas en tu dia 1</h2>
                    <audio src={store.audios[0]?.archivo} controls="controls" preload="none">
                    </audio>
                    <button type="button" className="btn btn-outline-light btn-lg mt-3 ms-5">COMENZAR DESAFIO </button>
                </div>
                <div className="animacion col-lg-8 col-sm-11 mt-4 ms-3">
                </div>
            </div>
        </div>
    );
};