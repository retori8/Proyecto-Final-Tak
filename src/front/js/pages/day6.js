import React from "react";
import "../../styles/challenge.css"
import { Context } from "../store/appContext";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";


export const Day6 = () => {

    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col cont_flor">
                    <video src={store.archivos[17]?.archivo} preload="auto" autoPlay="autoplay" className="video" />
                </div>
                <div className="col" >
                    <div className="row align-items-center">
                        <h1 id="tituloday21" className="col">Estas en tu día 6</h1>
                        <h5 className="texto-21">Reproduce la meditacion y una vez terminada, se habilitara la proxima meditacion para tu siguiente dia</h5>
                        <audio className="audio" src={store.archivos[33]?.archivo} controls="controls" preload="none" onEnded={(e) => navigate(`/challenges/21days/7`)} />
                        <Link className="cont_boton" to="/challenges/21days/7">
                            <button type="button" id="next" className="btn-lg">Siguiente día</button>
                        </Link>
                        <br />
                    </div>
                </div>

            </div>
        </div>
    );
};