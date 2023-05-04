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
                    <div className="card-block bg-white mb30">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="section-title mb-0">
                                    <h1>Mindfulness</h1>
                                    <h4>conciencia plena “aquí y ahora”</h4>
                                    <br/>
                                    <p>
                                        Es un hecho establecido  un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).
                                    </p>
                                    <br/>
                                    <Link type="button" className="btn btn-outline-light m-4" aria-current="page" to="/register">Crear Cuenta</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};