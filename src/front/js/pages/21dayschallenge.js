import React from "react";
import "../../styles/challenge21.css";
import { Link } from "react-router-dom";


export const Challenge21Days = () => {

    return (
        <div className="m-5 text-center">
            <div className="blockquote">
                <h1>Desafío 21 días</h1>
                <h5 className="m-4">21 días son necesarios para la formación de un nuevo hábito y es por eso que hemos creado este reto, enfocándonos en brindarte una herramienta que te permita sostener la práctica de la meditación, como un hábito diario, que sin duda hará un gran aporte a tu calidad de vida.</h5>
                <Link type="button" className="btn btn-outline-light m-4" aria-current="page" to="/challenges/21days/:id">
                    Comenzar
                </Link>
            </div>
        </div>
    );
};