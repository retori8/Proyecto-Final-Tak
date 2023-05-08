import React from "react";
import { ChallengesCard } from "../component/Challenges/challengeCard";


export const Challenges = () => {
    return (
        <div className="content-desafio">
            <div className="text-center p-3 ">
                <h1 className="titulo-desfios">¡Acepta el desafío Tak!</h1>
            </div>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <ChallengesCard
                        img="http://localhost:3000/img/desafio-random.jpg"
                        title="Desafío Random"
                        text="Hemos preparado variados desafios para que aceptes el primero que recibas." />
                    <ChallengesCard
                        img="http://localhost:3000/img/desafio-21-dias.jpg"
                        title="Desafío 21 Días"
                        text="Durante 21 días escucharás una meditación que fomentará en ti la gratitud." />
                </div>
            </div>
        </div>
    );
};