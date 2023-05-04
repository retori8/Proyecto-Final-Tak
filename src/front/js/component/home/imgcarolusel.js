import React from "react";

export const ImgCarousel = (props) => {
    return (
        <div className="carousel-item active mb-5" data-bs-interval="2000">
            <img src="https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2023/01/relajacion-aliviar-estres-calma-2939564.jpg?tf=3840x" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
                <h1>La práctica  del mindfulness asociada al agradecimiento</h1>
                <h4 className="mb-5">{props.argumento}</h4>
            </div>
        </div>
    );
};