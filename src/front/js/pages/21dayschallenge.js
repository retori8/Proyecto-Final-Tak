import React from "react";
import "../../styles/challenge.css"
import { Context } from "../store/appContext";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";


export const Start21days = (props) => {

    const { store, actions } = useContext(Context);
    const navigate = useNavigate();


    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col col-md-6 col-xs-10">
                    <video src={store.archivos[props.numvideo]?.archivo} preload="auto" autoPlay="autoplay" className="video" />
                </div>
                <div className="col col-md-6 col-xs-10" >
                    <div className="row align-items-center">
                        <audio className="audio" src={store.archivos[props.numaudio]?.archivo} controls="controls" preload="none" onEnded={(e)=>navigate('/challenges/21days/2')}/>
                        <h1 id="tituloday21" className="col my-4">Estas en tu día {props.day}</h1>
                        <Link to='/challenges/21days/:numnextday'>
                            <button type="button" id="next" class="btn-lg">Siguiente día</button>
                        </Link>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    );
};