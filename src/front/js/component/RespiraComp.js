import React from "react";
import '../../styles/respira.css';

export const RespiraComp = () => {
    return (
        <div className="container-fluid respira-content">
            <div className="row">
                <div className="col-md-6">
                    <h1 className="respira-title">Tómate un tiempo para conectarte con el presente</h1>
                    <p className="respira-text">Hemos preparado esta pausa para que te conecte con tu respiración, a través de una técnica conocida como “respiración relajante”: <br />
                        Comienza inhalando durante 4 segundos, luego mantienes el aire durante 7 y finalmente exhalas durante 8 segundos.</p>
                </div>
                <div className="col-md-6 circle-box">
                    <div className="circle"></div>
                    <div className="textContent">
                        <div className="inhala">¡Inhala!</div>
                        <div className="exhala">¡Exhala!</div>
                        <div className="mantiene">¡Mantiene!</div>
                    </div>
                </div>
            </div>
        </div>
    );
};