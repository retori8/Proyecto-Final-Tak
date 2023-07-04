import React from "react";
import { Link } from "react-router-dom";

export const BannerCard = () => {
    return (
        <div>
            <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="page-caption">
                                <h1 className="page-title"></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-section">
                <div className="container">
                    <div className="card-block mb30">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="section-title mb-0">
                                    <h1 className="title-header">Mindfulness</h1>
                                    <h4 className="subtitle-header">Conciencia Plena “Aquí y Ahora”</h4>
                                    <br />
                                    <p className="textBanner">
                                        Mindfulness es la práctica de estar presente y completamente comprometido en el momento actual, sin juicio ni distracción. Implica prestar atención a los pensamientos, sentimientos y sensaciones de una manera no crítica.
                                    </p>
                                    <br />
                                    <Link type="button" className="btn btn-outline-light btnHeader" aria-current="page" to="/registrarme">Crea tu Cuenta</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};