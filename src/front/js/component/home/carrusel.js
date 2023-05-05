import React from "react";
import { ImgCarousel } from "./imgcarolusel";

export const Carrusel = () => {
    return (
        <div
            id="carousel"
            className="carousel slide col-11"
            data-bs-ride="carousel"
        >
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval={10000}>
                    <img src="https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2023/01/relajacion-aliviar-estres-calma-2939564.jpg?tf=3840x" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h1>La práctica  del mindfulness asociada al agradecimiento</h1>
                        <h4>"Regula los neurotransmisores del estado de ánimo (serotonina) y del placer (dopamina)"</h4>
                    </div>
                </div>
                <ImgCarousel argumento="Mejora los niveles de glucosa." />
                <ImgCarousel argumento="Mejora nuestra salud cardiaca." />
                <ImgCarousel argumento="Aumenta los niveles de oxitocina, que es la hormona del amor, de la calma y el contacto" />
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    );
};