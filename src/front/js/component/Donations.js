import React from "react";
import { RadiosButton } from "./RadiosButton";
import { BotonUno } from "./BotonUno";

export const Donations = () => {
    return (
        <div id="cardbanner" className="container col-10 row">
            <div id="cardbody" className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-6">
                        <img src="https://img.freepik.com/vector-gratis/voluntarios-mano-poniendo-corazon-frasco-donacion-vidrio-persona-que-da-regalo-amor-gente-pobre-ilustracion-vectorial-plana-campana-caridad-concepto-servicio-banner-diseno-sitio-web-o-pagina-web-destino_74855-26130.jpg?w=1060&t=st=1682289858~exp=1682290458~hmac=9a501f6faa588be99701b3b75467c4e3dd07daa4f702c0b17dbc28386c5ad5b7" id="bannerimg" className="img-fluid rounded-start" alt="..." />
                    </div>

                    <div className="col-md-6">
                        <div className="card-body ps-4">
                            <div className="mb-4">
                                <h1 className="card-title m-2">Nos alegra que consideres apoyarnos</h1>
                                <p className="m-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </div>
                            <p className="card-text m-2">
                                <small className="text-body-secondary">Elige el monto con el que deseas apoyar a Tak</small>
                            </p>
                            <RadiosButton className="mb-2" />
                            <BotonUno />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};