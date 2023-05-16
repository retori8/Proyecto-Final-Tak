import React from "react";
import "../../../styles/discover.css"
import { ButtonFavorite } from "./buttonFavorite";

export const CardMovie = (props) => {


    return (
        <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
            <div className="cardescubre h-100">
                <img
                    src={props.img}
                    alt=""
                    className="img-fluid card-img-top"
                />
                <div className="p-4">
                    <h5 className="card-titles">{props.name}</h5>
                    <p className="card-autor">
                    <strong>Director:</strong>{props.director}
                    </p>
                    <p className="card-pages">
                    <strong>Duracion (min):</strong>{props.duration}
                    </p>
                    <p className="card-resena">
                    <strong> Reseña:</strong>{props.properties}
                    </p>
                    {/* <div className="py-2 mt-4 text-end">
                        <ButtonFavorite />
                    </div> */}
                </div>
            </div>
        </div>
    );
};