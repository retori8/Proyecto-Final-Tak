import React from "react";
import { ImgCarousel } from "./imgcarolusel";

export const Carrusel = () => {
    return (
        <div>
            <div
                id="carousel"
                className="carousel slide col-11"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    <ImgCarousel argumento="Mejora los niveles de glucosa."/>
                    <ImgCarousel argumento="Regula los neurotransmisores del estado de ánimo (serotonina) y del placer (dopamina)"/>
                    <ImgCarousel argumento="Mejora nuestra salud cardiaca."/>
                    <ImgCarousel argumento="Aumenta los niveles de oxitocina, que es la hormona del amor, de la calma y el contacto"/>
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
        </div>
    );
};