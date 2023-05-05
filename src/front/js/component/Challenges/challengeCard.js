import React from "react";


export const ChallengesCard = (props) => {
    return (
        <div className="col" >
            <div className="card bg-dark text-white text-center" id="challengeCard">
                <img src="..." className="card-img" alt="..." />
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