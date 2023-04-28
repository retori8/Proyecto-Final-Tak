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
                    <ImgCarousel />
                    <ImgCarousel />
                    <ImgCarousel />
                    {/* <div className="carousel-item" data-bs-interval={2000}>
                        <img src="https://media.meer.com/attachments/81612b35575aa86bfd9d69ce1667fe0b2ad2344e/store/fill/1090/613/e85cec719ffcdc7cea08a97f10656820830bef05c00e7d12ae81d64caba2/Hombre-mirando-una-puesta-de-sol-en-Tennessee-Estados-Unidos.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://media.meer.com/attachments/81612b35575aa86bfd9d69ce1667fe0b2ad2344e/store/fill/1090/613/e85cec719ffcdc7cea08a97f10656820830bef05c00e7d12ae81d64caba2/Hombre-mirando-una-puesta-de-sol-en-Tennessee-Estados-Unidos.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>

                    </div> */}
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