import React from "react";
import "../../../styles/random.css"
import { Link } from "react-router-dom";


export const ChallengesCard = (props) => {
    return (
        <div className="col random-content"  >
            <div className="card" id="challengeCard">
                <img src={props.img} className="card-img" alt="..." />
                <div className="card-img-overlay">
                    <h3 className="card-title">{props.title}</h3>
                    <p className="card-text">
                        {props.text}
                    </p>
                </div>
            </div>
        </div>

    );
};