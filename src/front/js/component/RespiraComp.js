import React from "react";
import '../../styles/respira.css';

export const RespiraComp = () => {
    return (
        <div className="container justify-content-center">
            <h1 className="text-center mt-5">Tómate un tiempo para conectarte con el presente</h1>
            <p className="text-center">Hemos preparado esta pausa para que te conecte con tu respiración</p>
            <div className="circle"></div>
            <div className="textContent">
                <div className="inhala">¡Inhala!</div>
                <div className="exhala">¡Exhala!</div>
            </div>
        </div>
    );
};