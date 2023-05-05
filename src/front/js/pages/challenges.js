import React from "react";
import { ChallengesCard } from "../component/Challenges/challengeCard";


export const Challenges = () => {
    return (
        <div>
            <div className="text-center p-3 ">
            <h1>Que mas te gustaria hacer hoy?</h1>
            </div>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <ChallengesCard title="DESAFIO 21 DIAS" text="h"/>
                    <ChallengesCard title="DESAFIO RANDOM" text="h"/>
                </div>
            </div>
        </div>
    );
};