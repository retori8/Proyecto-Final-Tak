import React from "react";
import { FaHeart } from "react-icons/fa";
import "../../../styles/homelogeado.css";

export const CardStatistics = () => {
    return (
        <div className="col-md-3 col-sm-6 mb-5">
            <div className="counter">
                <div className="container">
                    <div className="row">
                        <h1 className="col my-2"><FaHeart className="text-white" /></h1>
                        <h1 className="col counter-value my-3">23</h1>
                    </div>
                </div>
                <h3 className="mt-3">Agradecimientos
                    <br/>Mensuales
                </h3>
            </div>
        </div>
    );
};