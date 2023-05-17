import React from "react";
import "../../styles/challenge.css"
import { Context } from "../store/appContext";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";


export const Day21 = () => {

    const { store, actions } = useContext(Context);


    return (
        <div className="container cont-days">
            <div className="row align-items-center">
                <div className="col cont_flor">
                    <video src={store.days[20]?.image[0]?.archivo} preload="auto" autoPlay="autoplay" loop="loop" className="video" />
                </div>
                <div className="col" >
                    <div className="row align-items-center">
                        <h1 id="tituloday21" className="titul0-21 col">Felicidades, estas en tú último día del desafío.</h1>
                        <h5 className="texto-21">"La perseverancia no es una carrera larga, son muchas carreras cortas una tras otra.
                            Y cada una de ellas es importante." (Walter Elliot)</h5>
                        <audio className="audio" src={store.days[20]?.image[1]?.archivo} controls="controls" preload="none" onEnded={(e) => navigate(`/challenges/21days/3`)} />
                        <Link className="cont_boton" to="/desafios">
                            <button type="button" id="next" className="btn-lg">Comenzar un nuevo desafío</button>
                        </Link>
                        <br />
                    </div>
                </div>

            </div>
        </div>
    );
};