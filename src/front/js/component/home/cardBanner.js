import React from "react";

export const CardBanner = () => {
    return (
        <div id="cardbanner" className="container col-10 row">
            <div id="cardbody" className="card mb-3">
                <div  className="row g-0">
                    <div className="col-md-8">
                        <div className="card-body ps-4">
                            <div className="mb-4
                            ">
                            <h2 className="card-title">Mindfulness</h2>
                            <h4>conciencia plena “aquí y ahora” </h4>
                            </div>
                            <p className="card-text">
                                Es un hecho establecido  un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).
                            </p>
                            <p className="card-text">
                                <small className="text-body-secondary">Last updated 3 mins ago</small>
                            </p>
                            <a href="#" class="btn">Go somewhere</a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src="https://solnatural.bio/views/img/recipesphotos/75.jpg" id="bannerimg" className="img-fluid rounded-start" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    );
};