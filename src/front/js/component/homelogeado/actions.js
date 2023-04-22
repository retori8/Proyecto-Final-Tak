import React from "react";

export const Actions = () => {
    return (
        <div>
            <h1 className="text-center mt-2">Que mas te gustaria hacer hoy?</h1>
            <section>
                <div className="row">
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="card">
                            <div className="cover item-a">
                                <h1>
                                    Biblioteca 
                                    <br />
                                    Mindfulness
                                </h1>
                                <div className="card-back">
                                    <a href="#">Vamos !</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="card">
                            <div className="cover item-b">
                                <h1>
                                Respiracion
                                    <br />
                                    Mindfulness
                                </h1>
                                <div className="card-back">
                                    <a href="#">Vamos !</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="card">
                            <div className="cover item-c">
                                <h1>
                                    Desafios
                                    <br />
                                    Mindfulness
                                </h1>
                                <div className="card-back">
                                    <a href="#">Vamos !</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
};