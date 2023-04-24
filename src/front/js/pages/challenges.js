import React from "react";
import "../../styles/challenge.css";
import { CardChallenge } from "../component/Challenges/cardChallenge";


export const Challenges = () => {
    return (
        <div>
            <div className="text-center p-3 ">
            <h1>Que mas te gustaria hacer hoy?</h1>
            </div>
            <div className="container">
                <div className="row">
                    <CardChallenge />
                    <CardChallenge />
                </div>
            </div>
        </div>
    );
};