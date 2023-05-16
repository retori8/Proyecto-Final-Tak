import React from "react";
import "../../styles/challenge.css"
import { Context } from "../store/appContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";



export const Day1 = () => {

    const { store } = useContext(Context);
    const navigate = useNavigate();
    const { current_day } = useParams();
    const day = parseInt(current_day) + 1;
    const position = parseInt(current_day) - 1;

    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col cont_flor">
                    <video src={store.days[position]?.image[0]?.archivo} preload="auto" autoPlay="autoplay" className="video" />
                </div>
                <div className="col" >
                    <div className="row align-items-center">
                        <h1 id="tituloday21" className="col">Estás en tu día {current_day} del desafío</h1>
                        <h5 className="texto-21">Reproduce la meditación y una vez terminada, se habilitará tu próxima meditación diaria.</h5>
                        <audio className="audio" src={store.days[position]?.image[1]?.archivo} controls="controls" preload="none" onEnded={(e) => navigate(`/desafios/21dias/${day}`)} />
                        <Link className="cont_boton" to={`/desafios/21dias/${day}`} >
                            <button type="button" id="next" className="btn-lg">Siguiente día {store.days?.challenges_id}</button>
                        </Link>
                        <br />
                    </div>
                </div>

            </div>
        </div >
    );
};