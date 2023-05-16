import React from "react";
import "../../styles/challenge.css"
import { Context } from "../store/appContext";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";


export const Day21 = () => {

    const { store, actions } = useContext(Context);
    

    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col">
                    <video src={store.archivos[32]?.archivo} loop="loop" preload="auto" autoPlay="autoplay" className="video" />
                </div>
                <div className="col" >
                    <div className="row align-items-center">
                        <audio className="audio"  controls="controls" preload="none">
                            <source src={store.archivos[33]?.archivo} type="audio/mp3" />
                        </audio>
                        <h1 id="tituloday21" className="col my-4">Estas en tu día 21</h1>
                        <Link to="/challenges/21days/21">
                            <button type="button" id="next" className="btn-lg">Felicidades llegaste al final del desafio !!!</button>
                        </Link>
                        <br />
                    </div>
                </div>
                
            </div>
        </div>
    );
};