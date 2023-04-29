import React from "react";
import { CardTestimonials } from "./cardTestimonials";

export const Testimonials = () => {
    return (
        <div className="m-5">
            <div className="m-5">
                <h1>Lo que piensan de Tak</h1>
            </div>
            <br />
            <div className="container text-center">
                <div className="row grid gap-0 column-gap-3">
                    <CardTestimonials />
                    <CardTestimonials />
                    <CardTestimonials />
                    <CardTestimonials />
                </div>
            </div>
        </div>
    );
};