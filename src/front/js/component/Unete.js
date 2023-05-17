import React from "react";
import { BotonUno } from "./BotonUno";
import "../../styles/tak.css"
import { Link } from "react-router-dom";

export const Unete = () => {
    return (
        <div className="container unete-content">

            <h2 className="title-unete">Únete a Tak</h2>
            <p className="text-unete"> Se parte de la comunidad de mayor crecimiento mundial.</p>
            <Link className="link-unete" to={"/registrarme"}>
                <button type="button" class="btn btn-outline-light btn-unete">Quiero Unirme</button>
            </Link>
        </div>
    );
};