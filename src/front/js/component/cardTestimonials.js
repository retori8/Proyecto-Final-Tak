import React from "react";

export const CardTestimonials = () => {
    return (
        <div  className=" gtco-testimonials col-3 m-4">
            <div className="owl-carousel owl-carousel1 owl-theme">
                <div>
                    <div id="cardtestimonials" className="card text-center">
                        <img
                            className="card-img-top"
                            src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300"
                            alt=""
                        />
                        <div className="card-body">
                            <h5>
                                Juan Perez 
                            </h5>
                            <p className="card-text">
                                “ Nam libero tempore, cum soluta nobis est eligendi optio cumque
                                nihil impedit quo minus id quod maxime placeat ”{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};