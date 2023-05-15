import React from "react";
import "../../styles/challenge.css"



export const Day1 = (props) => {


    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col col-md-6 col-xs-10">
                    <video src={props?.video} preload="auto" autoPlay="autoplay" className="video" />
                </div>
                <div className="col col-md-6 col-xs-10" >
                    <div className="row align-items-center">
                        <audio className="audio" src={props?.audio} controls="controls" preload="none" onEnded={props?.ended}/>
                        <h1 id="tituloday21" className="col my-4">Estas en tu día {props?.day}</h1>
                        <Link to={props?.day}>
                            <button type="button" id="next" class="btn-lg">Siguiente día</button>
                        </Link>
                        <br />
                    </div>
                </div>
                
            </div>
        </div>
    );
};