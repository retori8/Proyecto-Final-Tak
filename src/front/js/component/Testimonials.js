import React from "react";
import { CardTestimonials } from "../component/cardTestimonials";

export const Testimonials = () => {
    return (
        <div className="m-5">
            <div className="m-4">
                <h1>Lo que piensan de Tak</h1>
            </div>
            <div  className="container text-center">
                <div id="testimonials" className="row g-0">
                    <CardTestimonials />
                    <CardTestimonials />
                    <CardTestimonials />
                </div>
            </div>
        </div>
    );
};