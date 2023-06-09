import React from "react";
import { ChallengesCard } from "../component/Challenges/challengeCard";
import { Link } from "react-router-dom";


export const Challenges = () => {
    return (
        <div className="content-desafio">
            <div className="text-center p-3 ">
                <h1 className="titulo-desfios">Aventúrate a un nuevo desafío Tak</h1>
            </div>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <Link to={"/desafios/random"}>
                        <ChallengesCard
                            img="http://localhost:3000/img/desafio-random.jpg"
                            title="Desafío Random"
                            text="Hemos preparado variados desafíos para que aceptes el primero que recibas." />
                    </Link>
                    <Link to="/desafios/21dias/1">
                        <ChallengesCard
                            img="http://localhost:3000/img/desafio-21-dias.jpg"
                            title="Desafío 21 Días"
                            text="Durante 21 días escucharás una meditación que fomentará en ti la gratitud." />
                    </Link>
                </div>
            </div>
        </div>
    );
};