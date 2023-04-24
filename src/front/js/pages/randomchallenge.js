import React from "react";
import "../../styles/challenge.css";
import { CardChallenge } from "../component/Challenges/cardChallenge";



export const RandomChallenge = () => {

    return (
        <div className="">
            <div className="container">
                <div className="row">
                    <div className="col m-3">
                        <h1 className="mb-5">Desafio Random</h1>
                        <h4>Es un hecho establecido  un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos</h4>

                    </div>
                    <div className="col-7 m-3">
                        <CardChallenge />
                        <button type="button" class="col-11 btn btn-outline-light btn-lg m-2 ms-4">INGRESA</button>
                    </div>
                </div>
            </div>
        </div>
    );
};