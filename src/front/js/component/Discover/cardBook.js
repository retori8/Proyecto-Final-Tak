import React from "react";
import "../../../styles/discover.css"
import { ButtonFavorite } from "./buttonFavorite";

export const CardBook = (props) => {


    return (
        <div id="cardbooks" className="col-xl-3 col-lg-4 col-md-6 mb-4">
            <div className="cardescubre bg-white rounded shadow-sm">
                <img
                    src="https://bootstrapious.com/i/snippets/sn-gallery/img-1.jpg"
                    alt=""
                    className="img-fluid card-img-top"
                />
                <div className="p-4">
                    <h5 className="text-center">{props.name}</h5>
                    <p className=" my-1">
                        Autor:{props.author}
                    </p>
                    <p className=" my-1">
                        Numero de paginas:{props.number_of_pages}
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