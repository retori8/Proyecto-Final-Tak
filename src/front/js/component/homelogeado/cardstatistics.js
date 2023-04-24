import React from "react";
import "../../../styles/homelogeado.css"
import { FaHeart } from "react-icons/fa";

export const CardStatistics = () => {
    return (
        <div className="col-md-3">
            <div className="counter p-4">
                <h4 className="counter-icon">
                    <FaHeart />
                </h4>
                <p className="">AGRADECIMIENTOS</p>
                <h3 className="counter-value">17</h3>
            </div>
        </div>
    );
};