import React from "react";

export const ImgCarousel = () => {
    return (
        <div className="carousel-item active mb-5" data-bs-interval={6000}>
            <img src="https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2023/01/relajacion-aliviar-estres-calma-2939564.jpg?tf=3840x" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
                <h1>First slide label</h1>
                <p className="mb-5">Some representative placeholder content for the first slide.</p>
            </div>
        </div>
    );
};