import React from "react";
import { ButtonFavorite } from "./buttonFavorite";

export const CardMovie = (props) => {


    return (
        <div className="cardescubre col-xl-3 col-lg-4 col-md-6 mb-4">
            <div className="bg-white rounded shadow-sm">
                <img
                    src="https://bootstrapious.com/i/snippets/sn-gallery/img-3.jpg"
                    alt=""
                    className="img-fluid card-img-top"
                />
                <div className="p-4">
                    <h5 className="text-center">{props.name}</h5>
                    <p className=" my-1">
                        Director:{props.director}
                    </p>
                    <p className=" my-1">
                        Duracion:{props.duration}
                    </p>
                    <p className=" my-1">
                        Resena:{props.properties}
                    </p>
                    <div className="py-2 mt-4 text-end">
                        <ButtonFavorite />
                    </div>
                </div>
            </div>
        </div>
    );
};