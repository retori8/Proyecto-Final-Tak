import React from "react";
import { Link } from "react-router-dom";

export const Carrusel = () => {
    return (
        <div
            id="carousel"
            className="carousel slide col-11"
            data-bs-ride="carousel"
            style={{ marginTop: '100px', }}
        >
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval={4000}>
                    <img src="http://localhost:3000/img/slide1.jpg" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h2 className="carouselTitle">La Gratitud es Ahora</h2>
                        <Link to={"/register"}>
                            <button type="button" class="btn btn-outline-light btn-carrusel" >Crear mi cuenta</button>
                        </Link>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval={4000}>
                    <img src="http://localhost:3000/img/slide2.jpg" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h2 className="carouselTitle">Respira y Conectate Contigo</h2>
                        <Link to={"/register"}>
                            <button type="button" class="btn btn-outline-light btn-carrusel" >Crear mi cuenta</button>
                        </Link>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval={4000}>
                    <img src="http://localhost:3000/img/slide3.jpg" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h2 className="carouselTitle">Medita y Conectate Contigo</h2>
                        <Link to={"/register"}>
                            <button type="button" class="btn btn-outline-light btn-carrusel" >Crear mi cuenta</button>
                        </Link>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
};