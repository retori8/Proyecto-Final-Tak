import React from "react";
import { Link } from "react-router-dom";

export const Actions = () => {
    return (
        <div>
            <h1 className="title-home-logueado">¿Qué más te gustaría hacer hoy?</h1>
            <section>
                <div className="row">
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="card">
                            <div className="cover item-a">
                                <h1 className="title-card">
                                    Biblioteca
                                    <br />
                                    Mindfulness
                                </h1>
                                <div className="card-back">
                                    <Link type="button" className="btn btn-back" aria-current="page" to="/discover">¡Vamos!</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="card">
                            <div className="cover item-b">
                                <h1 className="title-card">
                                    Respiración
                                    <br />
                                    Mindfulness
                                </h1>
                                <div className="card-back">
                                    <Link type="button" className="btn btn-back" aria-current="page" to="/respira">¡Vamos!</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="card">
                            <div className="cover item-c">
                                <h1 className="title-card">
                                    Desafíos
                                    <br />
                                    Mindfulness
                                </h1>
                                <div className="card-back">
                                    <Link type="button" className="btn btn-back" aria-current="page" to="/challenges" >¡Vamos!</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
};