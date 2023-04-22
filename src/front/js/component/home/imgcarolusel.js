import React from "react";

export const ImgCarousel = () => {
    return (
        <div className="carousel-item active" data-bs-interval={6000}>
            <img src="https://media.meer.com/attachments/81612b35575aa86bfd9d69ce1667fe0b2ad2344e/store/fill/1090/613/e85cec719ffcdc7cea08a97f10656820830bef05c00e7d12ae81d64caba2/Hombre-mirando-una-puesta-de-sol-en-Tennessee-Estados-Unidos.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
            </div>
        </div>
    );
};