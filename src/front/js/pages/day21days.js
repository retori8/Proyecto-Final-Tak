import React from "react";
import "../../styles/challenge.css"
import { Context } from "../store/appContext";
import { useContext } from "react";
import { Link } from "react-router-dom";


export const DayOf21Days = () => {

    const { store, actions } = useContext(Context);


    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col">
                    <video src={store.archivos[2]?.archivo} preload="auto" autoPlay="autoplay" loop="loop" className="video" />
                </div>
                <div className="col" >
                    <div className="row align-items-center">
                        <audio className="audio" src={store.archivos[0]?.archivo} controls="controls" preload="none" />
                        <h1 id="tituloday21" className="col my-4">Estas en tu día 1</h1>
                        <Link to="/challenges/21days/2">
                            <button type="button" id="next" class="btn-lg">Siguiente día</button>
                        </Link>
                        <br />
                    </div>
                </div>
                
            </div>
        </div>
    );
};