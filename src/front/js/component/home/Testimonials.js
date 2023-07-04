import React from "react";
import { CardTestimonials } from "../cardTestimonials";

export const Testimonials = () => {
    return (
        <div className="m-5">
            <div className="m-5">
                <h1 className="title-testimonios">Lo que dicen de Tak</h1>
            </div>
            <br />
            <div className="container text-center ">
                <div className="row grid gap-0 column-gap-3">
                    <CardTestimonials
                        img={"http://localhost:3000/img/profe.jpg"}
                        name="Luis Rodríguez"
                        text='"Desde que uso Tak, ya no rompo el teclado al escribir código, gracias Tak, simplemente cambiaron mi vida."'
                    />
                    <CardTestimonials
                        img={"http://localhost:3000/img/luis.jpg"}
                        name="Luis Robles"
                        text='"Desde que uso Tak, ya no rompo mis teclados al escribir código, gracias Tak, son los mejores."'
                    />
                    <CardTestimonials
                        img={"http://localhost:3000/img/caro.jpeg"}
                        name="Carolina Rojas"
                        text='"Desde que uso Tak, ya no rompo mis teclados al escribir código, gracias Tak, son los mejores."'
                    />
                    <CardTestimonials
                        img={"http://localhost:3000/img/simon.jpg"}
                        name="Simón Ramírez"
                        text='"Desde que uso Tak, ya no rompo mis teclados al escribir código, gracias Tak, son los mejores."'
                    />
                </div>
            </div>
        </div>
    );
};