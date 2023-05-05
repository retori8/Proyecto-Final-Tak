import React from "react";

export const ImgCarousel = (props) => {
    return (
        <div className="carousel-item mb-5" data-bs-interval={2000}>
            <img src="https://foodandtravel.mx/wp-content/uploads/2022/06/Oceanos-Por.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
                <h1>La práctica  del mindfulness asociada al agradecimiento</h1>
                <h4>{props.argumento}</h4>
            </div>
        </div>
    );
};