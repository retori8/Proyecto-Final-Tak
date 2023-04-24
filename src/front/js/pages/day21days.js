import React from "react";
import "../../styles/challenge.css"

export const DayOf21Days = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-3 mt-4 me-5" >
                    <h2 className="my-4">Estas en tu dia 1</h2>
                    <button type="button" className="btn btn-outline-light">COMENZAR DESAFIO </button>
                    <div
                        className="progress my-4"
                        role="progressbar"
                        aria-label="Basic example"
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    >
                        <div className="progress-bar" style={{ width: "25%" }} />
                    </div>
                </div>
                <div className="animacion col-8 mt-4 ms-3">
                </div>
            </div>
        </div>
    );
};